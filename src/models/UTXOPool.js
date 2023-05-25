import UTXO from './UTXO.js'

class UTXOPool {
  constructor(utxos = {}) {
    this.utxos = utxos
  }


  addUTXO(coinbaseBeneficiary,input,output) {
    var utxo=new UTXO(0)
    // 从UTXO池中获取与coinbaseBeneficiary（接收方地址）相关联的UTXO对象。
    var minerUTXO = this.utxos[coinbaseBeneficiary] 
    // 检查是否存在与coinbaseBeneficiary相关联的UTXO对象。
    if(minerUTXO != null){ 
      // 更新账户余额
      utxo.amount+=minerUTXO.amount
    }
    //账户的出块奖励
    utxo.amount += 12.5
    //余额为出块奖励+输入-输出
    utxo.amount = utxo.amount+input-output
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
}

export default UTXOPool