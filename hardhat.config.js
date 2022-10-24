require('@oasisprotocol/sapphire-hardhat');
require("@nomicfoundation/hardhat-toolbox");
const fs = require('fs');

let key = fs.readFileSync('./key', 'utf8');

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.9",
  networks: {
    sapphire: {
      url: `https://testnet.sapphire.oasis.dev`,
      accounts: [key]
    }
  }
};
