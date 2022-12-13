const Block = require("../src/Block").Block
const Blockchain = require("../src/Blockchain").Blockchain

// creating blocks
const testBlock = new Block([])
const testBlock2 = new Block([])
const testBlock3 = new Block([])
const testBlock4 = new Block([])

// create blockchain instance
const testBlockchain = new Blockchain()
testBlockchain.addBlock(testBlock)
testBlockchain.addBlock(testBlock2)
testBlockchain.addBlock(testBlock3)
testBlockchain.addBlock(testBlock4)

console.log(testBlockchain)