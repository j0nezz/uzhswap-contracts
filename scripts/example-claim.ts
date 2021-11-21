// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import { ContractFactory } from "ethers";
import faucetJSON from "../artifacts/contracts/Faucet.sol/Faucet.json";

async function main() {
  const [actor] = await ethers.getSigners();

  const claimerAddress = "0x1b1d1f616cf7514008196424E98B27742E530e54";
  const faucetAddress = "0x3Bb0d9581013dc0f1f3d36B2ED3558FD99FF6164";
  const faucetABI = faucetJSON.abi;
  console.log("faucet", faucetABI, "");
  // faucet deploy arguments

  // token Contract Instance
  const faucetContractInstance = new ethers.Contract(
    faucetAddress,
    faucetABI,
    actor
  );

  // calim tokens
  const claim = await faucetContractInstance.claim();
  console.log("claim", claim, "");
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
