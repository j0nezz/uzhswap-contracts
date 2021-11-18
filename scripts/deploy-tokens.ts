// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import * as fs from "fs";

async function main() {
  const addresses = [];

  const UZHUniToken = await ethers.getContractFactory("UZHUni");
  const uni = await UZHUniToken.deploy();
  await uni.deployed();
  const uniAddress = uni.address;
  addresses.push(["UZHUni", uniAddress]);
  console.log("Deployed UZHUni to:", uniAddress);

  const UZHSushiToken = await ethers.getContractFactory("UZHSushi");
  const sushi = await UZHSushiToken.deploy();
  await sushi.deployed();
  const sushiAddress = sushi.address;
  addresses.push(["UZHSushi", sushiAddress]);
  console.log("Deployed UZHSushi to:", sushiAddress);

  const UZHCroToken = await ethers.getContractFactory("UZHCro");
  const cro = await UZHCroToken.deploy();
  await cro.deployed();
  const croAddress = uni.address;
  addresses.push(["UZHCro", croAddress]);
  console.log("Deployed UZHCro to:", croAddress);

  addresses.forEach((e) => {
    try {
      const info = `${e[0]}: ${e[1]}`;
      fs.writeFileSync("../tokenAddresses.txt", info);
    } catch (e) {
      console.log(e);
    }
  });
}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
