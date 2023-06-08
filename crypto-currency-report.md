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

https://github.com/Hhhhhhhharu/blockchain-in-js-workshop-2021/commit/62cf3ba71c036f5cccd7138a3cdfafa7d578ae9c


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

https://github.com/Hhhhhhhharu/blockchain-in-js-workshop-2021/commit/998380878643bedbf56d1373d5664bab2c216924


### 代码截图

> 将截图上传至网盘，放入链接即可

![](链接)
[![V2nyba.png](https://i.imgloc.com/2023/06/09/V2nyba.png)](https://imgloc.com/i/V2nyba)
[![V2n46x.png](https://i.imgloc.com/2023/06/09/V2n46x.png)](https://imgloc.com/i/V2n46x)
[![V2nAQk.png](https://i.imgloc.com/2023/06/09/V2nAQk.png)](https://imgloc.com/i/V2nAQk)


### 主观与讨论题内容

以太坊中使用了一种基于字典树的数据结构，称为 Merkle Patricia Tree（MPT），它是以太坊状态树和以太坊账户树的基础。相比于传统的字典树，MPT 在以下几个方面做了改良：
1.压缩节点：MPT 中的节点可以被压缩成四种不同的类型，分别是扩展节点、叶子节点、空节点和分支节点。这种压缩方式可以大大减少存储空间的使用，同时也减少了节点的访问时间。
2.哈希优化：MPT 中使用哈希函数对节点进行标识，这种方式可以保证节点的唯一性，并且可以防止节点被篡改。此外，MPT 中还使用了一种特殊的哈希函数 Keccak-256，它具有高效性和安全性，可以保证节点的哈希值的唯一性和不可预测性。
3.支持动态修改：MPT 支持动态修改，可以对树进行插入、删除和修改操作。这种特性可以使得以太坊更加灵活和可扩展。
4.支持验证证明：MPT 支持验证证明，可以验证某个节点是否在树中，以及某个键值对是否存在于树中。这种特性可以使得以太坊更加安全和可靠。



MPT 的核心问题是如何高效地存储和访问以太坊中的状态和账户信息，MPT 的设计可以充分发挥字典树的优点，提高存储效率和访问速度，同时也支持动态修改和验证证明等特性，可以满足以太坊的要求。


---