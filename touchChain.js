const SHA256 = require('crypto-js/sha256')


class Block {
    constructor(data){
        this.hash = ""
        this.height = 0
        this.body = data
        this.time = 0
        this.previousBlockHash = ""
    }
}

class Blockchain {
    constructor(){
        // holds the blocks in the chain
        this.chain = []
    }

    addBlock(pBlock) {
        if (this.chain.length > 0) {
            // get the index of the last block in the chain
            const prevBlock = this.chain[this.chain.length - 1]
            pBlock.previousBlockHash = prevBlock.hash
        } else {
            // else if this.chain is empty - create new block
            pBlock.previousBlockHash = ""
        }
        
        // set block's hash
        pBlock.hash = SHA256(JSON.stringify(pBlock)).toString()
        // set height
        pBlock.height = this.chain.length
        // set timestamp
        pBlock.time = new Date().getTime().toString().slice(0, -3)
        // add block to chain
        this.chain.push(pBlock)
    }
}


module.exports = {
    Block,
    Blockchain
}