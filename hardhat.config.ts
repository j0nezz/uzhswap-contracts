import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";

dotenv.config();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

// chain urls
const GANACHE_URL = "http://127.0.0.1:7545";
const UZH_URL = "http://130.60.244.246:8545";

// @ts-ignore
const config: HardhatUserConfig = {
  solidity: {
    version: "0.7.6",
    settings: {
      optimizer: {
        runs: 200,
        enabled: true,
      },
    },
  },
  defaultNetwork: "ganache",
  networks: {
    ganache: {
      url: GANACHE_URL,
      // @ts-ignore
      accounts:
        process.env.GANACHE_PRIVATE_KEY !== undefined
          ? [process.env.GANACHE_PRIVATE_KEY, process.env.GANACHE_PRIVATE_KEY_2]
          : [],
    },
    uzh: {
      url: UZH_URL,
      // @ts-ignore
      accounts:
        process.env.UZH_PRIVATE_KEY !== undefined
          ? [process.env.UZH_PRIVATE_KEY, process.env.UZH_PRIVATE_KEY_2]
          : [],
    },
  },
};

export default config;
