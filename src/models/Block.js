import sha256 from 'crypto-js/sha256.js'

export const DIFFICULTY = 2

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

  calculateHash() {
    return sha256(
      this.previousHash + this.height + this.data + this.timestamp + this.nonce
    ).toString()
  }

  isValid() {
    const target = '0'.repeat(DIFFICULTY)
    return this.hash.substring(0, DIFFICULTY) === target
  }

  setNonce(nonce) {
    this.nonce = nonce
    this.hash = this.calculateHash()
  }
}

export default Block