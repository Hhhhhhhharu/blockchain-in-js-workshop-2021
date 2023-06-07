import UTXOPool from './UTXOPool.js'

class Blockchain {
  constructor(name) {
    this.name = name
    this.blocks = {}
    this.genesis = null
    this.utxoPool = new UTXOPool()

  }

  longestChain() {
    const longestChain = []
    let block = this.maxHeightBlock()
    while (block) {
      longestChain.push(block)
      block = this.blocks[block.previousHash]
    }
    return longestChain.reverse()
  }

  //判断当前区块链是否包含
  containsBlock(block) {
    return block.hash in this.blocks
  }

  //获得区块高度最高的区块
  maxHeightBlock() {
    let maxHeight = -1
    let maxHeightBlock = null
    for (const hash in this.blocks) {
      if (this.blocks[hash].height > maxHeight) {
        maxHeight = this.blocks[hash].height
        maxHeightBlock = this.blocks[hash]
      }
    }
    return maxHeightBlock
  }

  //添加区块
  _addBlock(block) {
    if (!block.isValid()) return
    if (this.containsBlock(block)) return

     // 添加 UTXO 快照与更新的相关逻辑
    var currentBlock = this.maxHeightBlock()
    let utxoPool = new UTXOPool()
    if(currentBlock == null){
      utxoPool.addUTXO(block.coinbaseBeneficiary,0,0)
      block.utxoPool = utxoPool
    }else{
      
      let currentUTXOPool = currentBlock.utxoPool
      currentUTXOPool.addUTXO(block.coinbaseBeneficiary,0,0)
      block.utxoPool = currentUTXOPool
    }
   
    this.blocks[block.hash] = block

  }

  getUTXOPool() {
    return this.utxoPool.clone()
  }
}

export default Blockchain