import * as dotenv from "dotenv";

import { HardhatUserConfig } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";

dotenv.config();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

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
      url: process.env.GANACHE_URL,
      accounts:
        process.env.GANACHE_PRIVATE_KEY !== undefined
          ? [process.env.GANACHE_PRIVATE_KEY]
          : [],
    },
    uzh: {
      url: process.env.UZH_URL,
      accounts:
        process.env.UZH_PRIVATE_KEY !== undefined
          ? [process.env.UZH_PRIVATE_KEY]
          : [],
    },
  },
};

export default config;
