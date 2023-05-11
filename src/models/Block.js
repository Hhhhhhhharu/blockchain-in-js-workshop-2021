class Block {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含
   所属区块链
   父块哈希
   高度
   哈希
  */
  constructor(blockchain,previousHash,height,hash) {
<<<<<<< Updated upstream
    this.blockchain=blockchain;
    this.previousHash=previousHash;
    this.height=height
    this.hash=hash

=======
    this.blockchain=blockchain
    this.previousHash=previousHash
    this.height=height
    this.hash=hash
>>>>>>> Stashed changes
  }
}

export default Block