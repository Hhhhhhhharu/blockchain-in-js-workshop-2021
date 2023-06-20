import sha256 from 'crypto-js/sha256.js'
import elliptic from 'elliptic'
const EC = elliptic.ec

class Transaction {
  constructor(from,to,value,fee) {
    this.from = from
    this.to = to
    this.value = value
    this.fee = fee//添加手续费
    this.signature = ''
    this.hash = this._calculateHash()
  }

  // 更新交易 hash
  // updateHash(){
  //   this.hash = this._calculateHash()
  // }

  // 计算交易 hash 的摘要函数
  _calculateHash() {
    return sha256(this.from + this.to + this.value + this.fee).toString()
  }

  // 对交易进行签名
  sign(privateKey) {
    if (privateKey !== this.from) {
    throw new Error('Invalid private key')
    }

    const key = EC.keyFromPrivate(privateKey)
    const signature = key.sign(this.hash)
    this.signature = signature.toDER('hex')
  }

  // 验证交易签名是否有效
  hasValidSignature() {
    if (this.from === '') {
    // Coinbase 交易无需签名
    return true
    }

    if (!this.signature || this.signature.length === 0) {
      throw new Error('Missing signature')
    }

    const key = EC.keyFromPublic(this.from, 'hex')
    return key.verify(this.hash, this.signature)
  }

}



export default Transaction