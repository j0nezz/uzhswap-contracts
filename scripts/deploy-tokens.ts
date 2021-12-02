// When running the script with `npx hardhat run <script>` you'll find the Hardhat
// Runtime Environment's members available in the global scope.
import { config, ethers, network } from "hardhat";
import writeLogFile from "../helpers/write-files";
import getNetworkInfo from "../helpers/get-network-info";

// list of all UZH token contracts --> contracts/UZHETHTokens.sol
const UZH_TOKENS: string[] = [
  "UzhUniToken",
  "UZHCro",
  "UZHSushi",
  "Privatepedia",
  "Intellicoin",
  "Incoingnito",
  "Cryptofficialcoin",
  "Coinicious",
];
export const AMOUNT_TO_CLAIM: number = 10000000000000;

async function main() {
  // collect deployed token addresses
  const addresses: any = {};

  // create transaction signer
  const deployers = await ethers.getSigners();
  const deployer = deployers[0];
  const contractOwner = deployer.address;
  // get current network
  const networkID = await getNetworkInfo(deployer);

  /*
  Deploy faucet contract
   */
  const FaucetFactory = await ethers.getContractFactory("Faucet");
  const faucet = await FaucetFactory.deploy(contractOwner, AMOUNT_TO_CLAIM);
  await faucet.deployed();
  const faucetAddress = faucet.address;
  console.log("Deployed Faucet to: ", faucetAddress);

  // write file to json
  const faucetInput = { date: new Date(), faucetAddress: faucetAddress };
  const faucetFile: string = "faucetAddress.json";
  writeLogFile(faucetFile, faucetInput, networkID);

  /*
   deploy token contracts
   */
  const deployTokens = async () => {
    for (const t of UZH_TOKENS) {
      // deploy token contract
      const Token = await ethers.getContractFactory(t);
      const token = await Token.deploy();
      await token.deployed();
      // save token address
      addresses[t] = { address: token.address };
      console.log(`Deployed ${t} to: ${token.address}`);
      // get initial supply of contract
      const initialSupply = await token.INITIAL_SUPPLY();
      // all the tokens can be spent by faucet
      const spendableAmount = ethers.utils.formatUnits(initialSupply, 18);
      // approve faucet contract to spend tokens
      console.log(
        `Approving faucet contract to spend ${spendableAmount} of ${t}...`
      );
      await token.approve(faucetAddress, initialSupply);
    }
  };
  await deployTokens();
  console.log(`Deployed ${UZH_TOKENS.length} tokens to the UZHETH network!`);

  // write file to json
  const tokenInput = { date: new Date(), tokens: addresses };
  const tokenFile: string = "tokenAddresses.json";
  writeLogFile(tokenFile, tokenInput, networkID);
}

main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
