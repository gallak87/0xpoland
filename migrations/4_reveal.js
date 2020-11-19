const Puzzle = artifacts.require("./Puzzle");

module.exports = function(callback) {
  Puzzle.deployed()
    .then(function(instance) {
      /*



Tip from twitter post https://twitter.com/0xPoland/status/1329347100723785730
^[A-Z].*\.
Bring my light, light by my side, light of the burning tower,

0x01ccfbfc

--> Elfor song, into the dark forest, lyrics:
-----------------
Ravens, your shinning wings on ice.
Bring my light, light by my side, light of the burning tower,
light of eternal fire. Give us, patient healing.
Nocturnal raven go far!! Above strange land on a
nightmare, we wait the light from straight,
share my breath and name with the healing fire,
light. I'm wretch behind my eyes, light i' fire.
Leaving at final.
-----------------

applying the regex, the result:

match 1: Ravens, your shinning wings on ice.
match 2: Leaving at final.

attempt: "Ravens, your shinning wings on ice. Leaving at final."
--> failed


saw someone else send this input (also failed)
// 0x06a01a4d579479dd5d884ebf61a31727a3d8d442000000000000000000000000

*/
      return instance.reveal("Ravens, your shinning wings on ice. Leaving at final.");
    })
    .then(function(response) {
      console.log("got response", response);
    })
    .catch(function(e) {
      console.log("caught error", e.message);
    });
}