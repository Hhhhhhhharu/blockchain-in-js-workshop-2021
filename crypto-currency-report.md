# 数字货币技术理论课实验报告

## 小组成员

- 2021131090-余宜芯 （组长）
- 2021131083-李俊霜
- 2021131084-韩乐瑶
- 2021131085-尹何苹
- 2021131088-陈丽
- 2021131089-肖潇


## 代码仓库链接

https://github.com/Hhhhhhhharu/blockchain-in-js-workshop-2021


## 第一课代码


### 代码 commint 地址

https://github.com/Hhhhhhhharu/blockchain-in-js-workshop-2021/commit/5fd9b123f211dfed0a9d192a2c8e04120d7d74c7


### 代码截图

> 将截图上传至网盘，放入链接即可

![](链接)
[![V0w2PN.png](https://i.imgloc.com/2023/06/02/V0w2PN.png)](https://imgloc.com/i/V0w2PN)
[![V0wOWV.png](https://i.imgloc.com/2023/06/02/V0wOWV.png)](https://imgloc.com/i/V0wOWV)


### 主观与讨论题内容
hash函数我们通过运用sha256来实现
如果要添加或者删除节点，则在最后一层添加一个新的叶子节点，并且需要重新计算哈希
关于证明路径，我们通过index找到叶子节点，再向上遍历，记录其兄弟节点的哈希值，push到proof里，一直重复到根节点。
通过证明路径，我们可以对需要验证的叶子节点和他的兄弟节点进行哈希，一直哈希到root，再与root的哈希值进行比较，如果两者相等，则说明该叶子节点属于默克尔树，数据完整性得到保证。


---



## 第二课代码


### 代码 commint 地址

https://github.com/CUITBlockchain/blockchain-in-js-workshop-2021/commit/25f3a0d83a9fff2b4514c5503f470df939d0c2af


### 代码截图

> 将截图上传至网盘，放入链接即可

![](链接)
[![V2UE3y.png](https://i.imgloc.com/2023/06/08/V2UE3y.png)](https://imgloc.com/i/V2UE3y)
[![V2Ue55.png](https://i.imgloc.com/2023/06/08/V2Ue55.png)](https://imgloc.com/i/V2Ue55)
[![V2U6i8.png](https://i.imgloc.com/2023/06/08/V2U6i8.png)](https://imgloc.com/i/V2U6i8)
[![V2UFbZ.png](https://i.imgloc.com/2023/06/08/V2UFbZ.png)](https://imgloc.com/i/V2UFbZ)
[![V2UGzF.png](https://i.imgloc.com/2023/06/08/V2UGzF.png)](https://imgloc.com/i/V2UGzF)
[![V2Ud1H.png](https://i.imgloc.com/2023/06/08/V2Ud1H.png)](https://imgloc.com/i/V2Ud1H)


### 主观与讨论题内容

如果要将字典树中的字母扩展成字母和数字的形式，可以考虑使用一个对象来表示每个节点，而不是使用一个字符。对象可以包含两个属性，一个属性用于存储节点对应的字母或数字，另一个属性用于存储子节点的映射表。

如果要提高字典树查询效率，可以采用压缩节点的方式来优化，它可以将一些拥有相同前缀的节点合并为一个节点。例如，如果字典树中同时包含单词 "apple" 和 "application"，那么它们的前缀 "app" 就可以被合并为一个节点，这样可以减少节点的数量，提高查询效率。
---


## 第三课代码


### 代码 commint 地址

https://github.com/CUITBlockchain/blockchain-in-js-workshop-2021/commit/25f3a0d83a9fff2b4514c5503f470df939d0c2af


### 代码截图

> 将截图上传至网盘，放入链接即可

![](链接)


### 主观与讨论题内容



---