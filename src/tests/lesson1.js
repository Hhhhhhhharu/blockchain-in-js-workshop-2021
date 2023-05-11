import Block from '../models/Block.js'
import Blockchain from '../models/Blockchain.js'
import sha256 from 'crypto-js/sha256.js'

const main = () => {
  // 初始化区块链
  var blockchain = new Blockchain('BitCoin')

  // 创建创世区块
  var genesisBlock = new Block(blockchain, 'root', 0, 'root')

  // 设置创世区块
  blockchain.genesis = genesisBlock

  // 构建区块
  var newBlock = new Block(
    blockchain,
    genesisBlock.hash,
    1,
    sha256(new Date().getTime().toString()).toString(),
  )

   //添加区块到链中
  blockchain.blocks[newBlock.hash] = newBlock

  var nextBlock = new Block(
    blockchain,
    newBlock.hash,
    2,
    sha256(new Date().getTime().toString()).toString(),
  )

  var nextCompetitionBlock = new Block(
    blockchain,
    newBlock.hash,
    2,
    sha256((new Date().getTime() + 1).toString()).toString(),
  )

  // 添加两个区块高度为 2  的的竞争区块
  blockchain.blocks[nextBlock.hash] = nextBlock
  blockchain.blocks[nextCompetitionBlock.hash] = nextCompetitionBlock
<<<<<<< Updated upstream
  
  //定义这个数组等于最长连
=======

  console.log()

>>>>>>> Stashed changes
  let longestChain = blockchain.longestChain()

  //最长的链应该有两个块，否则输出错误信息
  console.assert(longestChain.length == 2, 'Block height should be 2')

   //定义第三个高度的块
  var thirdBlock = new Block(
    blockchain,
    nextCompetitionBlock.hash,
    3,
    sha256(new Date().getTime().toString()).toString(),
  )

   //添加在区块中
  blockchain.blocks[thirdBlock.hash] = thirdBlock

  longestChain = blockchain.longestChain()

  // 区块检查
  console.assert(longestChain.length == 3, 'Block height should be 2')
  console.assert(
    longestChain[2].hash == thirdBlock.hash,
    `Height block hash should be ${thirdBlock.hash}`,
  )

  console.log(longestChain)
}

main()