const MintContract = artifacts.require("MintContract");

module.exports = function (deployer) {
  deployer.deploy(MintContract);
};
