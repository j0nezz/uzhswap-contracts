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
  const [sender] = await ethers.getSigners();
  // has to be a deployed faucet contract address
  const faucetAddress = "0x403894021396a417ed748d63feB7C77099c45b8B";
  const faucetABI = faucetJSON.abi;
  // has to be a deployed token address
  const deployedTokenAddress = "0x2fd7632915bE8659f2A0ECAad8fD7889006Ec30E";

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
