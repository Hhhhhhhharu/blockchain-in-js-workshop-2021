import UTXO from './UTXO.js'
import Transaction from './Transaction.js'

class UTXOPool {
  constructor(utxos = {}) {
    this.utxos = utxos
  }


  addUTXO(coinbaseBeneficiary,input,output,fee,blockHeight) {
    var utxo=new UTXO(0)
    // 从UTXO池中获取与coinbaseBeneficiary（接收方地址）相关联的UTXO对象。
    var minerUTXO = this.utxos[coinbaseBeneficiary] 
    // 检查是否存在与coinbaseBeneficiary相关联的UTXO对象。
    if(minerUTXO != null){ 
      // 更新账户余额
      utxo.amount+=minerUTXO.amount
    }
    //账户的出块奖励
    var blockReward = 50 / (2 ** (Math.floor(blockHeight / 210000)))
     //计算矿工奖励
     if (coinbaseBeneficiary === input.from) {
      utxo.amount += blockReward + fee
    } else {
      utxo.amount += fee
    }
    //余额为出块奖励+输入-输出-手续费
    utxo.amount += input.value - output.value - fee
    // 将新创建的或已更新的UTXO对象与coinbaseBeneficiary相关联，并将其添加到UTXO池中。
    this.utxos[coinbaseBeneficiary] = utxo 
    
  }
  
  clone() {
    const clonedUtxos = {}
    for (const address in this.utxos) {
      clonedUtxos[address] = this.utxos[address].clone()
    }
    return new UTXOPool(clonedUtxos)
  }



  // 处理交易函数
  handleTransaction(tx,fee) {
    if(this.isValidTransaction(tx.from,tx.value + fee)){//校验余额和手续费
      this.utxos[tx.from].amount -= (tx.value + fee)//减去转账金额和手续费
      if(this.utxos[tx.to]){
        this.utxos[tx.to].amount += tx.value//增加接收方的余额
      }else{
        this.utxos[tx.to]=new UTXO(tx.value)
      }
      this.addUTXO(tx.to, tx, { value: tx.value }, fee, 0)//增加矿工的余额和手续费
    }else{
      return
    }

  }

  // 验证交易合法性
  /**
   * 验证余额
   * 返回 bool 
   */
  isValidTransaction(address,value) {
    return this.utxos[address] && this.utxos[address].amount >= value
  }
}

export default UTXOPool