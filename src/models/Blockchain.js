// Blockchain
class Blockchain {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含 
      - 名字
      - 创世区块
      - 存储区块的映射
  */
  constructor(name) {
    this.name = name; // 区块链的名字
    this.genesis = null; // 创世区块
    this.blocks = {}; // 存储区块的映射
  }

  // 2. 定义 longestChain 函数
  /* 返回当前链中最长的区块信息列表 */
  longestChain() {
    let longestChain = []; // 用于存储最长的区块信息列表
    let nextBlocks = Object.values(this.blocks); // 获取当前区块链中所有的区块信息
    let temp = this.genesis; // 用于临时存储当前最长的区块信息

    // 遍历所有区块信息，找到当前最长的区块信息
    nextBlocks.forEach(function(block) {
      if (temp.height < block.height) {
        temp = block;
      }
    });

    // 从当前最长的区块信息开始向前查找所有的区块信息，构成最长的区块信息列表
    while (temp.previousHash !== "root") {
      longestChain.push(temp);
      temp = this.blocks[temp.previousHash];
    }
    longestChain.push(temp); // 加入创世区块
    longestChain.reverse(); // 将列表反转，以得到最长的区块信息列表
    return longestChain;
  }
}

export default Blockchain;