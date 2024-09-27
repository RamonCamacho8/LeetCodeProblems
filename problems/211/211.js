
class TrieNode {
    constructor() {
        this.children = {};
        this.isEnd = false;
    }
}

class WordDictionary {
    constructor() {
        this.root = new TrieNode();
    }
    /**
     * @param {string} word
     * @return {void}
     */
    addWord(word) {
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
    search(word, node = this.root) {
        let index = 0;
        for (const char of word) {
            
            if (char === '.') {
                return this.searchInChildren(word.slice(index), node);
            }

            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
            index++;
        }
        return node.isEnd;
    }

    searchInChildren(word, parentNode) {
        //Search in all children
        
        for (const char of Object.keys(parentNode.children)) {
            const childNode = parentNode.children[char];
            if (this.search(word.slice(1), childNode)) {
                return true;
            }
        }
        return false;
    }


    /**
     * @param {string} prefix
     * @return {boolean}
     */
    startsWith(prefix) {
        let node = this.root;
        for (const char of prefix) {
            if (!node.children[char]) {
                return false;
            }
            node = node.children[char];
        }
        return true;
    }

    printSearch(word){
        console.log("Matches for:  " + word + " -> " + this.search(word));
    }
    
}

let wordDictionary = new WordDictionary();
wordDictionary.addWord("at");
wordDictionary.addWord("and");
wordDictionary.addWord("an");
wordDictionary.addWord("add");

wordDictionary.printSearch("a"); //     False
wordDictionary.printSearch(".at"); //    False

wordDictionary.addWord("bat");

wordDictionary.printSearch(".at"); //   True
wordDictionary.printSearch("an."); //   True
wordDictionary.printSearch("a.d."); //  false
wordDictionary.printSearch("b."); //    false
wordDictionary.printSearch("a.d"); //   true
wordDictionary.printSearch("."); //     false */





