import sha256 from 'crypto-js/sha256.js'

export const DIFFICULTY = 3

class Block {
  constructor(blockchain, previousHash, height, data, coinbaseBeneficiary) {
    this.blockchain = blockchain
    this.previousHash = previousHash
    this.height = height
    this.data = data
    this.coinbaseBeneficiary = coinbaseBeneficiary
    this.timestamp = new Date().getTime()
    this.nonce = 0
    this.hash = this.calculateHash()
    this.utxoPool = {}
  }

   //计算当前区块的哈希值
  //我把 父块哈希加高度加随机数 的哈希值当前区块的哈希值
  calculateHash() {
    return sha256(
      this.previousHash + this.height + this.data + this.timestamp + this.nonce
    ).toString()
  }

  //检查当前区块的哈希是否符合难度需求
  //我们要检查当前哈希值前缀中0的数量是否等于difficulty，或者说是大于等于，就认为满足要求
  isValid() {
    const hash=this.calculateHash()
    return hash.substring(0,DIFFICULTY) == '0'.repeat(DIFFICULTY)
  }

  //设置随机数
  setNonce(nonce) {
    this.nonce = nonce
    this.hash = this.calculateHash()
  }
}

export default Block