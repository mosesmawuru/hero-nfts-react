const MintContract = artifacts.require("Mint");

module.exports = function (deployer) {
  deployer.deploy(MintContract);
};
