const scrotch = require("./touchChain")

// creating blocks
const testBlock = new scrotch.Block([])
const testBlock2 = new scrotch.Block([])
const testBlock3 = new scrotch.Block([])
const testBlock4 = new scrotch.Block([])

// create blockchain instance
const testBlockchain = new scrotch.Blockchain()
testBlockchain.addBlock(testBlock)
testBlockchain.addBlock(testBlock2)
testBlockchain.addBlock(testBlock3)
testBlockchain.addBlock(testBlock4)

console.log(testBlockchain)