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

Block类定义了相关的情况属性：包括所属区块链 父块哈希 高度 哈希




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
https://github.com/Hhhhhhhharu/blockchain-in-js-workshop-2021/commit/0ef2d8a635152552cf7a4baa7890e8a0a676b61f



### 代码截图

> 将截图上传至网盘，放入链接即可

![](链接)
![VDKMNE.png](https://i.imgloc.com/2023/05/26/VDKMNE.png)
![VDKL4Q.png](https://i.imgloc.com/2023/05/26/VDKL4Q.png)
![VDKPhC.png](https://i.imgloc.com/2023/05/26/VDKPhC.png)
![VDKTuP.png](https://i.imgloc.com/2023/05/26/VDKTuP.png)
![VDK1HX.png](https://i.imgloc.com/2023/05/26/VDK1HX.png)
![VDKQet.png](https://i.imgloc.com/2023/05/26/VDKQet.png)
![VDKYTJ.png](https://i.imgloc.com/2023/05/26/VDKYTJ.png)
![VDKukc.png](https://i.imgloc.com/2023/05/26/VDKukc.png)
![VDLZBA.png](https://i.imgloc.com/2023/05/26/VDLZBA.png)
![VDLi9o.png](https://i.imgloc.com/2023/05/26/VDLi9o.png)
![VDLfAN.png](https://i.imgloc.com/2023/05/26/VDLfAN.png)
![VDLyrV.png](https://i.imgloc.com/2023/05/26/VDLyrV.png)
![VDL4hd.png](https://i.imgloc.com/2023/05/26/VDL4hd.png)



### 主观与讨论题内容

理解区块中的交易存储和 UTXO 的继承结构:
UTXO (Unspent Transaction Output) 是指未被使用的交易输出。当一个新的交易被创建时，它会引用之前的 UTXO。在交易被验证之后，它会消耗掉对应的 UTXO，并创建新的 UTXO，以便其他人可以使用这些比特币。这些新的 UTXO 会被添加到当前区块的 UTXO 集合中，并成为下一个区块的继承基础。

理解 coinbase 交易:
Coinbase 交易是比特币区块链中一种特殊的交易，它会在每个新的区块中被创建，作为区块奖励和交易手续费的来源。它不需要引用之前的交易输出，而是会创建新的比特币。每个 Coinbase 交易会包含一个新的比特币地址和一定数量的比特币，这些比特币会被添加到当前区块链中的 UTXO 集合中。此外，Coinbase 交易还会包含一些额外的数据，例如区块的高度和时间戳等信息。
在比特币网络中，每当一个区块被成功添加到区块链中，创建这个区块的矿工会获得一定数量的比特币作为奖励。这个奖励数量最初是 50 BTC，但在比特币协议中有一个规定，每隔一段时间（目前是 210,000 个区块）就会减半一次，直到最终总量达到 21,000,000 BTC。目前（2023年5月），区块奖励已经减半至 6.25 BTC。
---




## 第四课代码


### 代码 commint 地址

https://github.com/Hhhhhhhharu/blockchain-in-js-workshop-2021/commit/c6c0301bfdbfcf054222efad8b04fb11d30b02bf


### 代码截图

> 将截图上传至网盘，放入链接即可

![](链接)
[![V0DYpw.png](https://i.imgloc.com/2023/06/02/V0DYpw.png)](https://imgloc.com/i/V0DYpw)
[![V0DQWz.png](https://i.imgloc.com/2023/06/02/V0DQWz.png)](https://imgloc.com/i/V0DQWz)
[![V0Dqva.png](https://i.imgloc.com/2023/06/02/V0Dqva.png)](https://imgloc.com/i/V0Dqva)
[![V0UZ4x.png](https://i.imgloc.com/2023/06/02/V0UZ4x.png)](https://imgloc.com/i/V0UZ4x)
[![V0UiNk.png](https://i.imgloc.com/2023/06/02/V0UiNk.png)](https://imgloc.com/i/V0UiNk)
[![V0UVdL.png](https://i.imgloc.com/2023/06/02/V0UVdL.png)](https://imgloc.com/i/V0UVdL)
[![V0Ufup.png](https://i.imgloc.com/2023/06/02/V0Ufup.png)](https://imgloc.com/i/V0Ufup)
![V0U4HU.png](https://i.imgloc.com/2023/06/02/V0U4HU.png)


### 主观与讨论题内容

⽐特币交易与转账的实现细节:
比特币的转账是通过发送比特币交易来实现的。要发送比特币，发送方需要创建一个交易，并将该交易广播到比特币网络中。接收方可以在比特币网络上验证该交易，并确认接收到比特币。在转账过程中，发送方要知道接收方的比特币地址，并且钱包里的钱要足够支付转账费用和手续费，这样矿工才能将其打包到区块中。

对⽐特币 UTXO 模型的理解：
在 UTXO 模型中，比特币被视为一组未花费的交易输出，每个 UTXO 对应于一个交易输出，记录了该交易输出的金额和收款地址。当一个 UTXO 被用于支付时，它将被消耗并转换为新的 UTXO。

⽐特币 UTXO 设计的必要性：
克服了传统账户模型的缺点，并使得比特币在保护用户隐私、实现复杂交易和提高可扩展性方面具有明显的优势。

 P2P 交易的基础与其特性：
p2p交易基础在于分布式计算和共识算法，在 P2P 交易中，参与者可以通过共享数据、计算资源和存储空间来互相交换价值，而不需要依赖于中心化的机构或平台。
特性：
1.去中心化
2.高效性
3.隐私保护
4.去信任化

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





