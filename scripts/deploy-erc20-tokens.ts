// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import * as fs from "fs";

async function main() {
  const addresses: any = {};

  // deploy UZHETH tokens
  const UzhUniToken = await ethers.getContractFactory("UzhUniToken");
  const uzhuni = await UzhUniToken.deploy();
  await uzhuni.deployed();
  console.log("Deployed UzhUniToken (UZHUNI): ", uzhuni.address);
  addresses.UzhUniToken = { address: uzhuni.address };

  const UZHSushiToken = await ethers.getContractFactory("UZHSushi");
  const uzhushi = await UZHSushiToken.deploy();
  await uzhushi.deployed();
  console.log("Deployed UZHSushi:", uzhushi.address);
  addresses.UZHSushi = { address: uzhushi.address };

  const UZHCroToken = await ethers.getContractFactory("UZHCro");
  const uzhcro = await UZHCroToken.deploy();
  await uzhcro.deployed();
  console.log("Deployed UZHCro:", uzhcro.address);
  addresses.UZHCro = { address: uzhcro.address };

  const Incoingnito = await ethers.getContractFactory("Incoingnito");
  const incoingnito = await Incoingnito.deploy();
  await incoingnito.deployed();
  console.log("Deployed Incoingnito (ICG): ", incoingnito.address);
  addresses.Incoingnito = { address: incoingnito.address };

  const Intellicoin = await ethers.getContractFactory("Intellicoin");
  const intellicoin = await Intellicoin.deploy();
  await intellicoin.deployed();
  console.log("Deployed Intellicoin (ITC): ", intellicoin.address);
  addresses.Intellicoin = { address: intellicoin.address };

  const Privatepedia = await ethers.getContractFactory("Privatepedia");
  const privatepedia = await Privatepedia.deploy();
  await privatepedia.deployed();
  console.log("Deployed Privatepedia (PVT): ", privatepedia.address);
  addresses.Privatepedia = { address: privatepedia.address };

  const Coinicious = await ethers.getContractFactory("Coinicious");
  const coinicious = await Coinicious.deploy();
  await coinicious.deployed();
  console.log("Deployed Coinicious (CNS): ", coinicious.address);
  addresses.Coinicious = { address: coinicious.address };

  const Cryptofficialcoin = await ethers.getContractFactory(
    "Cryptofficialcoin"
  );
  const cryptofficialcoin = await Cryptofficialcoin.deploy();
  await cryptofficialcoin.deployed();
  console.log("Deployed Cryptofficialcoin (COC): ", cryptofficialcoin.address);
  addresses.Cryptofficialcoin = { address: cryptofficialcoin.address };

  // write file to json
  const input = { date: new Date(), tokens: addresses };
  const file: string = "./logs/tokenAddress.json";
  fs.stat(file, (exist) => {
    if (exist) {
      try {
        fs.appendFileSync("./logs/tokenAddresses.json", JSON.stringify(input));
        console.log("appended - addresses successfully written in file!");
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        fs.writeFileSync("./logs/tokenAddresses.json", JSON.stringify(input));
        console.log("created - addresses successfully written in file!");
      } catch (err) {
        console.error(err);
      }
    }
  });
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
