import keccak256 from 'keccak256';

class MPTNode {
  constructor() {
    this.children = {};
    this.value = null;
  }
}

class MPTTree {
  constructor() {
    this.root = new MPTNode();
  }

  // 添加或更新地址的函数
  setAddress(address, value) {
    const addressHash = keccak256(address);
    const hexAddress = addressHash.toString('hex');
    let currentNode = this.root;

    for (let i = 0; i < hexAddress.length; i += 2) {
      const nibble = hexAddress.slice(i, i + 2);
      if (!currentNode.children[nibble]) {
        currentNode.children[nibble] = new MPTNode();
      }
      currentNode = currentNode.children[nibble];
    }

    currentNode.value = value;
  }

  // 计算MPT树的根哈希值
  getRootHash() {
    return this.calculateHash(this.root);
  }

  // 哈希计算函数
  calculateHash(node) {
    if (node.value !== null) {
      return keccak256(node.value).toString('hex');
    } else {
      const childHashes = Object.keys(node.children).map((nibble) => {
        return this.calculateHash(node.children[nibble]);
      });
      return keccak256(childHashes.join('')).toString('hex');
    }
  }

  // 验证函数
  verify(address, expectedValue) {
    const addressHash = keccak256(address);
    const hexAddress = addressHash.toString('hex');
    let currentNode = this.root;

    for (let i = 0; i < hexAddress.length; i += 2) {
      const nibble = hexAddress.slice(i, i + 2);
      if (!currentNode.children[nibble]) {
        return false;
      }
      currentNode = currentNode.children[nibble];
    }

    return currentNode.value === expectedValue;
  }
}

// 示例用法
const mptTree = new MPTTree();
mptTree.setAddress('0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5', 'example value');
const rootHash = mptTree.getRootHash();
console.log('Root Hash:', rootHash);

const verificationResult = mptTree.verify('0x95222290dd7278aa3ddd389cc1e1d165cc4bafe5', 'example value');
console.log('Verification Result:', verificationResult);