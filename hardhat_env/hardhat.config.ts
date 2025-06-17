import { HardhatUserConfig } from "hardhat/config";
import "@nomicfoundation/hardhat-toolbox";
import { version } from "hardhat";

const config: HardhatUserConfig = {
  solidity: "0.8.28",
};

module.exports = {
  solidity : {
    version: "0.8.28",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },    
  },
}

export default config;
