const Puzzle = artifacts.require("./Puzzle");

module.exports = function(callback) {
  Puzzle.deployed()
    .then(function(instance) {
      return instance.reveal("801365365");
    })
    .then(function(response) {
      console.log("got response", response);
    })
    .catch(function(e) {
      console.log("caught error", e.message);
    });
}