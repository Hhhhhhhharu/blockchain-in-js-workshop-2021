import sha256 from 'crypto-js/sha256.js'
import Transaction from './Transaction.js'
import UTXOPool from './UTXOPool.js'
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
    this.utxoPool = new UTXOPool()
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
      const [from, to, value,fee] = transactions[i].split(',')
      const trx = new Transaction(from,to,value,fee)
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


  isValidTransaction(tx) {
    if (tx.from === '') {
      // Coinbase 交易总是合法的
      return true
    }

    // 检查交易的签名是否有效
    if (!tx.hasValidSignature()) {
      return false
    }

    // 检查交易输入是否在 UTXO 池中
    const utxoPool = this.utxoPool
    return tx.inputs.every(function (input) {
      return utxoPool.contains(input) && utxoPool.getOutput(input).from === input.from
    })
  }


  // 添加交易到区块
  /**
   * 
   * 需包含 UTXOPool 的更新与 hash 的更新
   */
  addTransaction(tx,fee) {
    // 如果交易不合法，直接结束
    if (!this.utxoPool.isValidTransaction(tx.from, tx.value)) {
      return
    }

    // 更新 UTXO 池中的数据
    // this.utxoPool.handleTransaction(tx,fee)
    //我们需要传递 fee 参数给 handleTransaction 方法，否则会出现 ReferenceError: fee is not defined 错误。


    const utxoPool = this.utxoPool
    tx.inputs.forEach(function (input) {
      utxoPool.remove(input)
    })
    tx.outputs.forEach(function (output) {
      utxoPool.add(output)
    })
    // 添加 coinbase 交易的输出
    utxoPool.add(new Transaction('', tx.to, fee, 0).getOutput())
    
    // 更新区块数据并重新计算哈希值
    this.data += `;${tx.from},${tx.to},${tx.value},${tx.fee}`
    this.hash = this.calculateHash()
  }
}

export default Block