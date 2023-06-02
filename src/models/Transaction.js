import sha256 from 'crypto-js/sha256.js'


class Transaction {
  constructor(from,to,value) {
    this.from = from
    this.to = to
    this.value = value
    this.hash = sha256(this.from,this.to,this.value).toString()
  }

  // 更新交易 hash


  // 计算交易 hash 的摘要函数
  _calculateHash() {
    return sha256(this.from,this.to,this.value).toString()
  }
}

export default Transaction