const Puzzle = artifacts.require("./Puzzle");

module.exports = function(callback) {
  Puzzle.deployed()
    .then(function(instance) {
      return instance.commit("0x012312312312312");
    })
    .then(function(response) {
      console.log("got response", response);
    });
}