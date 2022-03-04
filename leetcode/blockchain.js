const SHA256 = require("crypto-js/sha256");

/**
 * 区块信息的结构化定义
 */
class Block {
    /**
     * 构造函数
     * @param {Number} index
     * @param {String} previousHash
     * @param {Number} timestamp
     * @param {*} data
     * @param {String} hash
     */
    constructor(index, previousHash, timestamp, data, hash) {
        this.index = index;
        this.previousHash = previousHash + "";
        this.timestamp = timestamp;
        this.data = data;
        this.hash = hash + "";
    }
}

class BlockChain {
    constructor() {
        this.blocks = [this.getGenesisBlock()];
    }
    /**
     * 创建区块链起源块，此块是硬编码
     */
    getGenesisBlock() {
        return new Block(
            0,
            "0",
            1612427873,
            "Genesis Block",
            SHA256("0" + "0" + "1612427873" + "Genesis Block"),
        )
    }
    /**
     * 根据信息计算hash值
     */
    calculateHash(index, previousHash, timestamp, data) {
        return SHA256(index + previousHash + timestamp + data) + "";
    }
    /**
     * 得到区块链中的最后一个块节点
     */
    getLatestBlock() {
        return this.blocks[this.blocks.length - 1];
    }
    /**
     * 计算当前链表的下一个节点
     * @param {*} blockData
     */
    generateNextBlock(blockData) {
        const previousBlock = this.getLatestBlock();
        const nextIndex = previousHash.index + 1;
        const nextTimeStamp = new Date().getTime();
        const nextHash = this.calculateHash(nextIndex, previousBlock.hash,
            nextTimeStamp, blockData);
        return new Block(nextIndex, previousBlock.hash, nextTimeStamp, 
            blockData, nextHash);
    }
    /**
     * 向区块链添加新节点
     * @param {Block} newBlock
     */
    addBlock(newBlock) {
        // 合法区块
        if (this.isValidNewBlock(newBlock, this.getLatestBlock())) {
            this.blocks.push(newBlock);
            return true;
        }
        return false;
    }
    /**
     * 判断新区块的index是否是递增的
     * 判断previousHash是否和前一个区块的hash相等
     * 判断新区块的hash是否按约束的规则生成
     */
}


