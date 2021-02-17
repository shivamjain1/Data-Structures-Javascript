/* 
    Implement Trie - can be used in implementing Type Ahead (Auto-complete) feature 
*/

class Node {
    constructor(ch) {
        this.children = new Map();
        this.value = ch;
        this.isEnd = true;
    }
}

class Trie{
    constructor(){
        this.root = new Node();
    }

    insert(word){
        let index = this.root;
        for(let ch of word){
            const node = index.children.get(ch) || new Node(ch);
            index.children.set(ch, node);
            index = node;
        }
        index.isEnd = true;
    }

    search(word){
        let index = this.root;
        for(let ch of word){
            index = index.children.get(ch);
            if(!index) return false;
        }
        return index.isEnd === true;
    }

    startsWith(word){
        let index = this.root;
        for(let ch of word){
            index = index.children.get(ch);
            if(!index) return false;
        }
        return true;
    }
}

/* 
    Insert - Time O(m), Space O(m) where m is key length
    Search - Time O(m), Space O(1)
    Prefix search (using startsWith) - Time O(m), Space O(1)
*/

const obj = new Trie();
obj.insert('shiv');
obj.insert('jain');
console.log(obj.search('shiv'));
console.log(obj.startsWith('jain'));
