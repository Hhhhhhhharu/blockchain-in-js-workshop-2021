class TrieNode {
    constructor() {
      this.children = new Array(26).fill(null); // 子节点数组，每个位置对应一个字母，初始为null
      this.isEndOfWord = false; // 表示是否是一个单词的结尾，默认为false
    }
  }

  export default TrieNode