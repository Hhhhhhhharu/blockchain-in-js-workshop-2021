import sha256 from 'crypto-js/sha256.js'


class Transaction {
  constructor(from,to,value,fee) {
    this.from = from
    this.to = to
    this.value = value
    this.fee = fee//添加手续费
    this.hash = sha256(this.from,this.to,this.value,this.fee).toString()//更新交易hash
  }

  // 更新交易 hash
  // updateHash(){
  //   this.hash = this._calculateHash()
  // }

  // 计算交易 hash 的摘要函数
  _calculateHash() {
    return sha256(this.from,this.to,this.value,this.fee).toString()
  }
}

export default Transaction