// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { ethers } from "hardhat";
import * as fs from "fs";

async function main() {
  let addresses = {};

  // deploy UZHETH tokens
  const UzhUniToken = await ethers.getContractFactory("UzhUniToken");
  const uzhuni = await UzhUniToken.deploy();
  await uzhuni.deployed();
  console.log("Deployed UzhUniToken (UZHUNI): ", uzhuni.address);
  // eslint-disable-next-line node/no-unsupported-features/es-syntax
  addresses = { ...addresses, uzhuni: { address: uzhuni.address } };

  const UZHSushiToken = await ethers.getContractFactory("UZHSushi");
  const uzhushi = await UZHSushiToken.deploy();
  await uzhushi.deployed();
  console.log("Deployed UZHSushi:", uzhushi.address);
  // eslint-disable-next-line node/no-unsupported-features/es-syntax
  addresses = { ...addresses, uzhuni: { address: uzhuni.address } };

  const UZHCroToken = await ethers.getContractFactory("UZHCro");
  const uzhcro = await UZHCroToken.deploy();
  await uzhcro.deployed();
  console.log("Deployed UZHCro:", uzhcro.address);
  // eslint-disable-next-line node/no-unsupported-features/es-syntax
  addresses = { ...addresses, uzhcro: { address: uzhcro.address } };

  const Incoingnito = await ethers.getContractFactory("Incoingnito");
  const incoingnito = await Incoingnito.deploy();
  await incoingnito.deployed();
  console.log("Deployed Incoingnito (ICG): ", incoingnito.address);
  // eslint-disable-next-line node/no-unsupported-features/es-syntax
  addresses = { ...addresses, incoingnito: { address: incoingnito.address } };

  const Intellicoin = await ethers.getContractFactory("Intellicoin");
  const intellicoin = await Intellicoin.deploy();
  await intellicoin.deployed();
  console.log("Deployed Intellicoin (ITC): ", intellicoin.address);
  // eslint-disable-next-line node/no-unsupported-features/es-syntax
  addresses = { ...addresses, intellicoin: { address: intellicoin.address } };

  const Privatepedia = await ethers.getContractFactory("Privatepedia");
  const privatepedia = await Privatepedia.deploy();
  await privatepedia.deployed();
  console.log("Deployed Privatepedia (PVT): ", privatepedia.address);
  // eslint-disable-next-line node/no-unsupported-features/es-syntax
  addresses = { ...addresses, privatepedia: { address: privatepedia.address } };

  const Coinicious = await ethers.getContractFactory("Coinicious");
  const coinicious = await Coinicious.deploy();
  await coinicious.deployed();
  console.log("Deployed Coinicious (CNS): ", coinicious.address);
  // eslint-disable-next-line node/no-unsupported-features/es-syntax
  addresses = { ...addresses, coinicious: { address: coinicious.address } };

  const Cryptofficialcoin = await ethers.getContractFactory(
    "Cryptofficialcoin"
  );
  const cryptofficialcoin = await Cryptofficialcoin.deploy();
  await cryptofficialcoin.deployed();
  console.log("Deployed Cryptofficialcoin (COC): ", cryptofficialcoin.address);
  // eslint-disable-next-line node/no-unsupported-features/es-syntax
  addresses = {
    // eslint-disable-next-line node/no-unsupported-features/es-syntax
    ...addresses,
    cryptofficialcoin: { address: cryptofficialcoin.address },
  };

  // write file to json
  const input = { date: new Date(), tokens: addresses };
  const file: string = "./tokenAddress.json";
  fs.stat(file, (exist) => {
    if (exist) {
      try {
        fs.appendFileSync("./tokenAddresses.json", JSON.stringify(input));
        console.log("appended - addresses successfully written in file!");
      } catch (err) {
        console.error(err);
      }
    } else {
      try {
        fs.writeFileSync("./tokenAddresses.json", JSON.stringify(input));
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
