import * as dotenv from "dotenv";

import { HardhatUserConfig, task } from "hardhat/config";
import "@nomiclabs/hardhat-etherscan";
import "@nomiclabs/hardhat-waffle";
import "@typechain/hardhat";



dotenv.config();

// You need to export an object to set up your config
// Go to https://hardhat.org/config/ to learn more

const config: HardhatUserConfig = {
  solidity: {
    version:"0.7.6",
    settings: {
      optimizer: {
        runs: 200,
        enabled: true
      }
    }
  },
  defaultNetwork: "ganache",
  networks: {
    ganache: {
      url: "http://127.0.0.1:7545",
      accounts:  process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
    uzh: {
      url: "http://uzheth.business.uzh.ch",
      accounts:  process.env.PRIVATE_KEY !== undefined ? [process.env.PRIVATE_KEY] : []
    },
  }
};

export default config;
