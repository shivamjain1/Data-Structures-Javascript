/* 
    Implementation of Priority Queue in JS 
        1. Using linked list
        2. Using Binary Heap (Optimized)
*/

//  1. Linked list approach

class Node{
    constructor(val, priority){
        this.value = val;
        this.priority = priority;
        this.next = null;
    }
}

class PriorityQueue{
    constructor(){
        this.first = null
    }

    insert(val, priority){
        const newNode = new Node(val, priority);
        if(!this.first || priority > this.first.priority) {
            newNode.next = this.first;
            this.first = newNode;
        } else {
            let pointer = this.first;
            while(pointer.next && priority < pointer.next.priority){
                pointer = pointer.next;
            }
            newNode.next = pointer.next;
            pointer.next = newNode;
        }
    }

    remove() {
        const first = this.first;
        this.first = this.first.next;
        return first;
    }

    /* 
        Insert - O(n)
        Remove - O(1)
    */
}

/* let first = new PriorityQueue();
first.insert(2,2);
first.remove();
first.insert(1,3);
first.insert(3,4);
console.log(first); */

// 2. Binary heap approach

class _PriorityQueue{
    constructor(){
        this.heap = [null]
    }

    insert(val, priority){
        const newNode = new Node(val, priority);
        this.heap.push(newNode);

        let currentNodeIdx = this.heap.length - 1;
        let currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
        while(
            this.heap[currentNodeParentIdx] &&
            newNode.priority > this.heap[currentNodeParentIdx].priority
        ) {
            const parent = this.heap[currentNodeParentIdx];
            this.heap[currentNodeParentIdx] = newNode;
            this.heap[currentNodeIdx] = parent;
            currentNodeIdx = currentNodeParentIdx;
            currentNodeParentIdx = Math.floor(currentNodeIdx / 2);
        }
    }

    remove() {
        if(this.heap.length < 3){
            const toReturn = this.heap.pop();
            this.heap[0] = null;
            return toReturn;
        }

        const toRemove = this.heap[1];
        this.heap[1] = this.heap.pop();
        let currentIdx = 1;
        let [left, right] = [2*currentIdx, 2*currentIdx + 1];
        let currentChildIdx = this.heap[right] && this.heap[right].priority >= this.heap[left].priority ? right : left;

        while(this.heap[currentChildIdx] && this.heap[currentIdx].priority <= this.heap[currentChildIdx].priority) {
            let currentNode = this.heap[currentIdx];
            let currentChildNode = this.heap[currentChildIdx];
            this.heap[currentIdx] = currentChildNode;
            this.heap[currentChildIdx] = currentNode;
        }
        return toRemove;
    }

    /* 
        Insert - O(log n)
        Remove - O(log n)
    */
}

let first = new _PriorityQueue();
first.insert(2,2);
first.remove();
first.insert(1,3);
first.insert(3,4);
console.log(first);