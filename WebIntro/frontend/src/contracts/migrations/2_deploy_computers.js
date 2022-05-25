const Computers = artifacts.require("Computers");

module.exports = function (deployer) {
  deployer.deploy(Computers);
};