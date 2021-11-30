// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import faucetJSON from "../artifacts/contracts/Faucet.sol/Faucet.json";
import { BigNumber } from "ethers";

async function main() {
  const senders = await ethers.getSigners();
  // choose other address than deployer
  const owner = senders[0];
  const sender = senders[1];

  // define the new amount that the faucet will spend when tokens are claimed
  const newAmount: number = 100000000000000000;
  const bigNumberNewAmount: BigNumber = BigNumber.from(newAmount.toString());

  // has to be a deployed faucet contract address on the CORRECT NETWORK
  // Ganache Faucet Address:
  const faucetAddress = "0x572D80a44F2b0633354ecE16CeA4B1aDB5a7e768";
  // UZH Faucet Address:
  // const faucetAddress = "";
  const faucetABI = faucetJSON.abi;

  // get faucet Contract Instance with contract owner
  const ownerFaucetContractAddress = new ethers.Contract(
    faucetAddress,
    faucetABI,
    owner
  );

  // get faucet Contract Instance with another signer
  const senderFaucetContractInstance = new ethers.Contract(
    faucetAddress,
    faucetABI,
    sender
  );

  // get current claimable amount
  const currentAmount = await senderFaucetContractInstance.getAmount();
  console.log(
    `current Amount that can be claimed ${ethers.utils.formatUnits(
      currentAmount,
      18
    )} tokens`
  );

  // update claimable amount
  const updateAmount = await ownerFaucetContractAddress.setAmount(
    bigNumberNewAmount
  );
  console.log("Updating amount", updateAmount);

  // get updated claimable amount
  const updatedAmount = await senderFaucetContractInstance.getAmount();
  console.log(
    `current Amount that can be claimed ${ethers.utils.formatEther(
      updatedAmount
    )} tokens`
  );
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
