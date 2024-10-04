class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class Trie {
    constructor() {
        this.root = new TrieNode();
    }
    /**
     * @param {string} word
     * @return {void}
     */
    insert(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                node.children[char] = new TrieNode();
            }
            node = node.children[char];
        }
        node.isEnd = true;
    }
    /**
     * @param {string} word
     * @return {boolean}
     */
    search(word) {
        let node = this.root;
        for (const char of word) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return node.isEnd;
    }

    printTrie() {
        
        let node = this.root;
        
        const print = (node, str) => {
            if (node.isEnd ){
                console.log(str)
            }
            for (const key in node.children) {
                print(node.children[key], str + key);
            }
        }

        for (const key in node.children) {
            print(node.children[key], key);
        }



    }

    
}

const getBinary = (number) => {
    return number.toString(2);
};

const flipBits = (number, digits) => {
    return ~number & (Math.pow(2, digits) - 1); //
};

const trie = new Trie();

/**
 *
 * @param {[]} nums
 * @returns
 */

var findMaximumXOR = function (nums) {

    if (nums.length === 1) return nums[0];
    if (nums.length === 2) return nums[0] ^ nums[1];

    let maxPow = 0;
    let max = 0;
    let setOfNumbers = new Set();
    let memo = new Map();

    for (let i = 0; i < nums.length; i++) {
        
        const number = nums[i];
        setOfNumbers.add(number);
    
        const binaryElement = number.toString(2);
        trie.insert(binaryElement);

        const binaryLen = binaryElement.length;
        maxPow = binaryLen > maxPow ? binaryLen : maxPow;

        

    }

    for (let i = 0; i < nums.length; i++) {

        const number = nums[i];
        const flipped = flipBits(number, maxPow);

        if (memo.get(number) === flipped || memo.get(flipped) === number) {
            console.log(`Pair ${number}-${flipped} already looked.`)
            continue;
        }

        memo.set(number, flipped);
        memo.set(flipped, number);

        if(setOfNumbers.has(flipped)) {
            console.log("Set has the flipped.")
            const xor = number ^ flipped;
            max = xor > max ? xor : max;
            continue;
        }

        else if (trie.search(getBinary(flipped))) {

            const xor = number ^ flipped;
            max = xor > max ? xor : max;
        }
    }

    
    return max;
};

const numbers = [8, 2, 7];


console.log(findMaximumXOR(numbers));

console.log(trie.search(getBinary(2)));

trie.printTrie();