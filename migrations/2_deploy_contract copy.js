const Puzzle = artifacts.require("./Puzzle");

module.exports = function (deployer) {
  deployer.deploy(Puzzle, "0x5746fe8ae2bf9fb24bcdf4972ea78c0211211e23c376461956d46d8d8a6519ba");
};
