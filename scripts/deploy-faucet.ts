// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers, network } from "hardhat";

async function main() {
  // signer
  // const [signer] = await ethers.getSigners();
  // console.log("signer", signer, ""); // console.log("actor", actor, "");

  // faucet deploy arguments
  const tokenOwnerAddress = network.config.accounts.toString();
  const amountToClaim = 100;

  // deploy faucet contract
  const FaucetFactory = await ethers.getContractFactory("Faucet");
  const faucet = await FaucetFactory.deploy(tokenOwnerAddress, amountToClaim);
  await faucet.deployed();
  const faucetAddress = faucet.address;
  console.log("Deployed Faucet to: ", faucetAddress);
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
