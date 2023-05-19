# 实验报告模板

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

https://github.com/Hhhhhhhharu/blockchain-in-js-workshop-2021/commit/62e94514f27d75e92192140b525fe061b8db89f8


### 代码截图

> 将截图上传至网盘，放入链接即可

![](链接)
![iqFT6J.png](https://i.328888.xyz/2023/05/11/iqFT6J.png)
![iqhQl8.png](https://i.328888.xyz/2023/05/12/iqhQl8.png)
![iqhYxZ.png](https://i.328888.xyz/2023/05/12/iqhYxZ.png)
![iqG6tN.png](https://i.328888.xyz/2023/05/11/iqG6tN.png)
![iqGeMo.png](https://i.328888.xyz/2023/05/11/iqGeMo.png)
![iqd59Q.png](https://i.328888.xyz/2023/05/12/iqd59Q.png)


### 主观与讨论题内容

我们先定义了一个名为 Blockchain 的类，它是一个区块链数据结构的实现。
我们再实现了constructor(name)方法，创建一个新的区块链对象，传入一个名字参数 name，初始时 genesis 属性为 null，blocks 属性为一个空对象。
然后实现longestChain()方法:，用于返回当前链中最长的区块信息列表。它遍历了所有的区块，找到链中高度最高的区块作为起始点，然后迭代查找前一区块，直到找到创世区块为止，最后返回整条链。
<<<<<<< Updated upstream
Block类定义了相关的情况属性：包括所属区块链 父块哈希 高度 哈希
=======
Block类定义了相关的情况属性：包括所属区块链，父块哈希，高度，哈希
>>>>>>> Stashed changes




## 第二课代码


### 代码 commint 地址

https://github.com/Hhhhhhhharu/blockchain-in-js-workshop-2021/commit/9cde79e58292a50d21d31ac11c4355926f7d140e


### 代码截图

> 将截图上传至网盘，放入链接即可

![](链接)
![VVupMJ.png](https://i.328888.xyz/2023/05/18/VVupMJ.png)
![VVuEyN.png](https://i.328888.xyz/2023/05/18/VVuEyN.png)
![VVueIV.png](https://i.328888.xyz/2023/05/18/VVueIV.png)


### 主观与讨论题内容
我们在Block.js中定义了isvalid()类，通过检查区块的哈希值前面是否有足够多的零来判断区块是否符合挖矿难度要求
又定义了calculateHash()类，我们将父块哈希加高度加随机数的哈希值当前区块的哈希值
还有一个setNonce()用来设置随机数。


51%算力攻击是攻击者获得超过51%的算力从而控制了整个网络，这时攻击者便可以对交易随意篡改了。要避免51%攻击，我们可以在网络中增强算力，减少攻击者获得51%算力的可能性，使攻击者要想得到控制权必须投入更多资源。


PoW优势：
1.安全性高，PoW依赖大量算力来验证交易和生成新区块，使攻击者只有投入大量算力才能完成攻击。
2.去中心化，防止了中心化带来的弊端，同时让每个人参与进挖矿，保证了每个矿工都有可能获得奖励。

缺点：
1.资源消耗多，需要大量的计算，但还不一定能挖到，造成了一定程度上的资源浪费。


阐述如何通过技术⼿段提⾼挖矿的效率?
可以加入挖矿池增加挖矿的成功机会。挖矿池是由多个矿工组成的网络，共同合作挖掘区块。通过加入挖矿池，矿工可以共享算力，提高挖矿的效率，并在成功挖掘区块后按照贡献程度分配奖励。
---


## 第三课代码


### 代码 commint 地址




### 代码截图

> 将截图上传至网盘，放入链接即可

![](链接)


### 主观与讨论题内容



---




## 第四课代码


### 代码 commint 地址

https://github.com/CUITBlockchain/blockchain-in-js-workshop-2021/commit/25f3a0d83a9fff2b4514c5503f470df939d0c2af


### 代码截图

> 将截图上传至网盘，放入链接即可

![](链接)


### 主观与讨论题内容



---




## 第五课代码


### 代码 commint 地址

https://github.com/CUITBlockchain/blockchain-in-js-workshop-2021/commit/25f3a0d83a9fff2b4514c5503f470df939d0c2af


### 代码截图

> 将截图上传至网盘，放入链接即可

![](链接)


### 主观与讨论题内容



---




## 第六课代码


### 代码 commint 地址

https://github.com/CUITBlockchain/blockchain-in-js-workshop-2021/commit/25f3a0d83a9fff2b4514c5503f470df939d0c2af


### 代码截图

> 将截图上传至网盘，放入链接即可

![](图片链接放这里)


### 主观与讨论题内容



---


## 结课报告





