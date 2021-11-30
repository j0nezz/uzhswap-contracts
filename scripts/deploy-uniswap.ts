// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import { ContractFactory } from "ethers";

import WETH9 from "../utils/weth9.json";
import FACTORY from "@uniswap/v3-core/artifacts/contracts/UniswapV3Factory.sol/UniswapV3Factory.json";
import ROUTER from "@uniswap/v3-periphery/artifacts/contracts/SwapRouter.sol/SwapRouter.json";
import NFT_DESCRIPTOR from "@uniswap/v3-periphery/artifacts/contracts/libraries/NFTDescriptor.sol/NFTDescriptor.json";
import POSITION_MANAGER from "@uniswap/v3-periphery/artifacts/contracts/NonfungiblePositionManager.sol/NonfungiblePositionManager.json";
import MULTICALL from "@uniswap/v3-periphery/artifacts/contracts/lens/UniswapInterfaceMulticall.sol/UniswapInterfaceMulticall.json";
import QUOTER from "@uniswap/v3-periphery/artifacts/contracts/lens/Quoter.sol/Quoter.json";
import writeLogFile from "../helpers/write-files";
import getNetworkInfo from "../helpers/get-network-info";

async function main() {
  const addresses: any = {};

  const actors = await ethers.getSigners();
  const actor = actors[0];
  const networkID = await getNetworkInfo(actor);

  const Weth9 = new ContractFactory(WETH9.abi, WETH9.bytecode, actor);
  const weth9 = await Weth9.deploy();
  addresses.weth9 = { address: weth9.address };
  console.log("WETH9: ", weth9.address);

  const Factory = new ContractFactory(FACTORY.abi, FACTORY.bytecode, actor);
  const factory = await Factory.deploy();
  addresses.factory = { address: factory.address };
  console.log("Factory: ", factory.address);

  const Router = new ContractFactory(ROUTER.abi, ROUTER.bytecode, actor);
  const router = await Router.deploy(factory.address, weth9.address);
  addresses.router = { address: router.address };
  console.log("Router: ", router.address);

  const NftDescriptorLibrary = new ContractFactory(
    NFT_DESCRIPTOR.abi,
    NFT_DESCRIPTOR.bytecode,
    actor
  );
  const nftDescriptorLibrary = await NftDescriptorLibrary.deploy();
  addresses.nftDescriptorLibrary = { address: nftDescriptorLibrary.address };

  const positionDescriptorFactory = await ethers.getContractFactory(
    "NonfungibleTokenPositionDescriptor",
    {
      libraries: {
        NFTDescriptor: nftDescriptorLibrary.address,
      },
    }
  );
  const nftDescriptor = await positionDescriptorFactory.deploy(
    weth9.address,
    // 'ETH' as a bytes32 string
    ethers.utils.formatBytes32String("UZHETH")
  );
  addresses.nftDescriptor = { address: nftDescriptor.address };

  const PositionManager = new ContractFactory(
    POSITION_MANAGER.abi,
    POSITION_MANAGER.bytecode,
    actor
  );
  const positionManager = await PositionManager.deploy(
    factory.address,
    weth9.address,
    nftDescriptor.address
  );
  addresses.positionManager = { address: positionManager.address };
  console.log("Position Manager: ", positionManager.address);

  const Multicall = new ContractFactory(
    MULTICALL.abi,
    MULTICALL.bytecode,
    actor
  );
  const multicall = await Multicall.deploy();
  addresses.multicall = { address: multicall.address };
  console.log("Multicall: ", multicall.address);

  const Quoter = new ContractFactory(QUOTER.abi, QUOTER.bytecode, actor);
  const quoter = await Quoter.deploy(factory.address, weth9.address);
  addresses.quoter = { address: quoter.address };
  console.log("Quoter: ", quoter.address);

  // write file to json
  const input = { date: new Date(), contracts: addresses };
  const file: string = "contractAddresses.json";
  writeLogFile(file, input, networkID);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
