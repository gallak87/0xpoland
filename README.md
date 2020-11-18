# 0xpoland
Attempt at cracking 0xpoland.dev puzzle
contract: https://etherscan.io/address/0x46CA2bf8188303887d6AF76ddD316AFa233b2ec9
info: www.0xpoland.dev
twitter: https://twitter.com/0xPoland

# How to run
1. install deps (requires nodejs, npm)
```bash
npm -i ganache-cli truffle
```

2. in 1 terminal, run
```bash
ganache-cli
```
3. in another terminal at this folder, compile the contract
```bash
truffle compile Puzzle
```

4. and then deploy it
```bash
truffle migrate > output.log
```

## Testing answers
1. Now you are ready to test. Edit reveal.js with your answer and run:
```bash
truffle exec migrations/4_reveal.js --network development > output.log
```
2. Check the output, if it has 'invalid' you guessed wrong.

if you get stuck, refer to this article https://medium.com/haloblock/deploy-your-own-smart-contract-with-truffle-and-ganache-cli-beginner-tutorial-c46bce0bd01e
