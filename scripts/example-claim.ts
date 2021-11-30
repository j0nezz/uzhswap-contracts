// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import faucetJSON from "../artifacts/contracts/Faucet.sol/Faucet.json";

async function main() {
  /*
  INFO: adapt PK in you .env file if you want to example claim with a different account than the deployer of the contracts
  --> then run: hardhat run scripts/example-claim.ts
   */
  const senders = await ethers.getSigners();
  // choose other address than deployer
  const sender = senders[1];
  // has to be a deployed faucet contract address on the CORRECT NETWORK
  // Ganache Faucet Address
  const faucetAddress = "0x572D80a44F2b0633354ecE16CeA4B1aDB5a7e768";
  // UZH Faucet Address
  // const faucetAddress = "";

  const faucetABI = faucetJSON.abi;
  // has to be a deployed token address on the CORRECT NETWORK
  // --> Ganache Token Address
  const deployedTokenAddress = "0x9Ae8238eC7AbF4f1D96567781Ec7E4C4f86386Fc";

  // const deployedTokenAddress = "0x2fd7632915bE8659f2A0ECAad8fD7889006Ec30E";

  // get faucet Contract Instance
  const faucetContractInstance = new ethers.Contract(
    faucetAddress,
    faucetABI,
    sender
  );

  // claim tokens
  const claim = await faucetContractInstance.claim(deployedTokenAddress);
  console.log("claiming tokens", claim.from);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
