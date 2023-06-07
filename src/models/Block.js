import sha256 from 'crypto-js/sha256.js'
import Transaction from './Transaction.js'
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

  // 根据交易变化更新区块 hash
  _setHash() {}

  // 汇总计算交易的 Hash 值
  /**
   * 默克尔树实现
   */
  combinedTransactionsHash() {
    // 获取所有交易数据
    const transactions = this.data.split(';')
    const hashes = []

    // 对每笔交易计算哈希值并保存
    for (let i = 0; i < transactions.length; i++) {
      const [from, to, value] = transactions[i].split(',')
      const trx = new Transaction(from,to,value)
      hashes.push(trx.hash)
    }

    // 如果交易数量是奇数，将最后一个哈希值重复一次
    if (hashes.length % 2 == 1) {
      hashes.push(hashes[hashes.length - 1])
    }

    // 循环合并哈希值直到只剩下一个根哈希值
    while (hashes.length > 1) {
      const combinedHashes = []
      for (let i = 0; i < hashes.length; i += 2) {
        const leftHash = hashes[i]
        const rightHash = hashes[i + 1] || leftHash
        const combined = sha256(leftHash + rightHash).toString()
        combinedHashes.push(combined)
      }
      hashes.length = 0
      hashes.push(...combinedHashes)
    }

    return hashes[0]

  }


  // 添加交易到区块
  /**
   * 
   * 需包含 UTXOPool 的更新与 hash 的更新
   */
  addTransaction(tx) {
    // 如果交易不合法，直接结束
    // if (!this.utxoPool.isValidTransaction(tx.from, tx.value)) {
    //   return
    // }

    // 更新 UTXO 池中的数据
    this.utxoPool.handleTransaction(tx)

    // 更新区块数据并重新计算哈希值
    this.data += `;${tx.from},${tx.to},${tx.value}`
    this.hash = this.calculateHash()
  }
}

export default Block