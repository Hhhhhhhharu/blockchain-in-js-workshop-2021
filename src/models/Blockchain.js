// Blockchain
class Blockchain {
  // 1. 完成构造函数及其参数
  /* 构造函数需要包含 
      - 名字
      - 创世区块
      - 存储区块的映射
  */
<<<<<<< Updated upstream
      constructor(name) {
        this.name = name;
        this.genesis = null;
        this.blocks = {};
      }
    
      // 2. 定义 longestChain 函数
      /* 返回当前链中最长的区块信息列表 */
      longestChain() {
        let longestChain = []
        let nextBlocks = Object.values(this.blocks)
        let temp = this.genesis
        nextBlocks.forEach(function(block) {
          if(temp.height < block.height){
            temp = block
          }
        })
    
        while(temp.previousHash != "root"){
          longestChain.push(temp)
          temp = this.blocks[temp.previousHash]
        }
        longestChain.push(temp)
        longestChain.reverse()
        return longestChain;
=======
  constructor(name) {
    this.name=name
    this.genesisBlock=null
    this.blockMap={}
  }

  // 2. 定义 longestChain 函数
  /* 
    返回当前链中最长的区块信息列表
  */
  longestChain() {
    let longest=[]
    let maxLength=0

    for(let block of this.blockMap.values()){
      let current=[block]
      let length=1

      while(block.previousHash in this.blockMap){
        block=this.blockMap[block.previousHash]
        current.push(block)
        length++
      }

      if(length>maxLength){
        longest=current
        maxLength=length
      }
    }
    return longest
>>>>>>> Stashed changes
  }


}

export default Blockchain