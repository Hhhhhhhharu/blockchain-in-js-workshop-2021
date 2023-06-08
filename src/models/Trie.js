import  TrieNode from './TrieNode.js';

class Trie {
    constructor() {
      this.root = new TrieNode(); // Trie的根节点
    }
  
    /**
     * 插入一个单词到Trie中
     * @param {string} word - 要插入的单词
     */
    insert(word) {
      let current = this.root; // 从根节点开始
  
      for (let i = 0; i < word.length; i++) {
        const index = word.charCodeAt(i) - 'a'.charCodeAt(0); // 计算当前字母的索引
  
        if (current.children[index] === null) { // 如果当前节点的子节点为空，则创建新的节点
          current.children[index] = new TrieNode();
        }
  
        current = current.children[index]; // 移动到下一个节点
      }
  
      current.isEndOfWord = true; // 标记单词的结尾
    }
  
    /**
     * 搜索一个单词是否在Trie中
     * @param {string} word - 要搜索的单词
     * @returns {boolean} - 如果单词存在返回true，否则返回false
     */
    search(word) {
      let current = this.root; // 从根节点开始
  
      for (let i = 0; i < word.length; i++) {
        const index = word.charCodeAt(i) - 'a'.charCodeAt(0); // 计算当前字母的索引
  
        if (current.children[index] === null) { // 如果当前节点的子节点为空，则单词不存在
          return false;
        }
  
        current = current.children[index]; // 移动到下一个节点
      }
  
      return current.isEndOfWord; // 返回是否是一个单词的结尾
    }
  
    /**
     * 检查是否存在以指定前缀开头的单词
     * @param {string} prefix - 前缀
     * @returns {boolean} - 如果存在以指定前缀开头的单词返回true，否则返回false
     */
    startsWith(prefix) {
      let current = this.root; // 从根节点开始
  
      for (let i = 0; i < prefix.length; i++) {
        const index = prefix.charCodeAt(i) - 'a'.charCodeAt(0); // 计算当前字母的索引
  
        if (current.children[index] === null) { // 如果当前节点的子节点为空，则不存在以该前缀开头的单词
          return false;
        }
  
        current = current.children[index]; // 移动到下一个节点
      }
  
      return true; // 存在以指定前缀开头的单词
    }
  
    /**
     * 从Trie中删除一个单词
     * @param {string} word - 要删除的单词
     */
    delete(word) {
      this.deleteHelper(this.root, word, 0);
    }
  
    /**
     * 删除帮助函数，递归删除单词
     * @param {TrieNode} current - 当前节点
     * @param {string} word - 要删除的单词
     * @param {number} index - 当前字母的索引
     * @returns {boolean} - 如果成功删除返回true，否则返回false
     */
    deleteHelper(current, word, index) {
      if (index === word.length) { // 如果已经遍历完单词
        if (!current.isEndOfWord) { // 如果当前节点不表示一个单词的结尾，返回false
          return false;
        }
  
        current.isEndOfWord = false; // 将当前节点的isEndOfWord标记为false
  
        // 检查当前节点是否有子节点
        return this.hasChildren(current);
      }
  
      const char = word.charCodeAt(index) - 'a'.charCodeAt(0); // 当前字母的索引
      const nextNode = current.children[char]; // 下一个节点
  
      if (nextNode === null) { // 如果下一个节点为空，则单词不存在于Trie中
        return false;
      }
  
      const shouldDeleteCurrentNode = this.deleteHelper(nextNode, word, index + 1); // 递归删除下一个节点
  
      if (shouldDeleteCurrentNode) { // 如果下一个节点需要删除
        current.children[char] = null; // 将当前节点的子节点置为空
        return !this.hasChildren(current) && !current.isEndOfWord; // 返回当前节点是否没有子节点且不是一个单词的结尾
      }
  
      return false; // 无需删除当前节点
    }
  
    /**
     * 检查节点是否有子节点
     * @param {TrieNode} node - 要检查的节点
     * @returns {boolean} - 如果节点有子节点返回true，否则返回false
     */
    hasChildren(node) {
      for (let i = 0; i < node.children.length; i++) {
        if (node.children[i] !== null) {
          return true;
        }
      }
  
      return false;
    }
  }
  
  // 示例用法
  const trie = new Trie();
  trie.insert("apple");
  trie.insert("banana");
  console.log(trie.search("apple"));  // 输出: true
  console.log(trie.search("banana")); // 输出: true
  console.log(trie.search("cherry")); // 输出: false
  console.log(trie.startsWith("app")); // 输出: true
  console.log(trie.startsWith("ban")); // 输出: true
  trie.delete("apple");
  console.log(trie.search("apple"));  // 输出: false
  console.log(trie.startsWith("app")); // 输出: false