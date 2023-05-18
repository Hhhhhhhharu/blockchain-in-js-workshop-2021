import pkg from 'crypto-js';
const { SHA256 } = pkg;


export const DIFFICULTY = 3
class Block {
  // 1. 完成构造函数及其参数

  
  constructor(blockchain,previousHash,height,hash,nonce) {
    this.blockchain=blockchain;
    this.previousHash=previousHash;
    this.height=height
    this.hash=hash
    this.nonce=nonce
  }
  //检查当前区块的哈希是否符合难度需求
  //我们要检查当前哈希值前缀中0的数量是否等于difficulty，或者说是大于等于，就认为满足要求
  isValid() {
    const hash=this.calculateHash()
    return hash.substring(0,DIFFICULTY) == '0'.repeat(DIFFICULTY)
  }
  //计算当前区块的哈希值
  //我把 父块哈希加高度加随机数 的哈希值当前区块的哈希值
   calculateHash(){
    return SHA256(
      this.previousHash+this.height+this.nonce
    ).toString()
   }
   //设置随机数
  setNonce(nonce) {
    this.nonce=nonce}
}

export default Block