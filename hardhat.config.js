/*
require("@nomicfoundation/hardhat-toolbox");
*/
/** @type import('hardhat/config').HardhatUserConfig */
/*

module.exports = {
  solidity: "0.8.17",
};
*/
require("@nomicfoundation/hardhat-chai-matchers");

module.exports = {
  solidity: "0.8.17",
  networks: {
    hardhat: {
      forking: {
        url: 'https://eth-goerli.g.alchemy.com/v2/WQhXaGlH2zZ4ei8ofydSXeiae8k3374m',
        blockNumber: 8335158,
      },
    },
  },
};