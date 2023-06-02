import sha256 from 'crypto-js/sha256.js'

class MerkleTree {
    constructor(elements) {
      this.elements = elements;
      this.levels = this.getLevels(elements);
      this.root = this.levels[this.levels.length - 1][0];
    }
  
    // 转换成一个二维数组，表示 Merkle Tree 的每一层的哈希值。
    getLevels(elements) {
      if (elements.length === 0) {
        return [[]];
      }
      const levels = [[...elements]];
      while (levels[levels.length - 1].length > 1) {
        const lastLevel = levels[levels.length - 1];
        const level = [];
        for (let i = 0; i < lastLevel.length; i += 2) {
          const left = lastLevel[i];
          const right = i + 1 < lastLevel.length ? lastLevel[i + 1] : left;
          const hash = this.hash(left + right);
          level.push(hash);
        }
        levels.push(level);
      }
      return levels;
    }
  
    hash(data) {
      // 哈希函数，这里使用 SHA-256 算法
      return sha256(data).toString();
      // ...
    }
  
    // 接受一个元素的索引，返回一个证明该元素在 Merkle Tree 中的哈希值的证明路径。
    // 证明路径是一个由兄弟节点的哈希值组成的数组。
    getProof(index) {
      const proof = [];
      for (let i = 0; i < this.levels.length - 1; i++) {
        const level = this.levels[i];
        const isRightNode = index % 2;//判断是否为右子节点，如果是右子节点，则为1
        const siblingIndex = isRightNode ? index - 1 : index + 1;
        if (siblingIndex < level.length) {
            //如果有兄弟节点，记录兄弟节点的哈希值
          proof.push(sha256(level[siblingIndex]).toString()).toString();
        }else{
            //如果没有兄弟节点，记录当前节点的哈希值
            proof.push(sha256(level[isRightNode ? index : index - 1]).toString());
        }
        index = Math.floor(index / 2);
      }
      return proof;
    }
    //验证给定元素是否存在于 Merkle Tree 中
    verify(element, proof) {
      let hash = this.hash(element);
      for (const siblingHash of proof) {
        hash = this.hash(siblingHash + hash);
      }
      return hash === this.root;
    }
  }
  
  // 示例代码
  const elements = ['a', 'b', 'c', 'd','e'];
  const tree = new MerkleTree(elements);
  console.log('Root:',tree.root);
  
  const index = 4;
  const proof = tree.getProof(index);
  console.log('Proof:',proof);
  
  const isVerified = tree.verify(elements[index], proof);
  console.log('Is Verified:',isVerified);