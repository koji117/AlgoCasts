// --- Directions
// Implement classes Node and Linked Lists
// See 'directions' document

class Node {
    constructor(data, next = null) {
        this.data = data;
        this.next = next;
    }
}

class LinkedList {

    constructor() {
        this.head = null
    }

    insertFirst(data) {
        return this.head = new Node(data, this.head);
    }

    size() {
        let counter = 0;
        let node = this.head;

        while (node) {
            counter++
            node = node.next;
        }

        return counter;
    }

    getFirst() {
        return this.head;
    }

    getLast() {
        if (!this.head) {
            return null
        } else {
            let last;
            let node = this.head;
            while (node) {
                if (!node.next) {
                    last = node
                }
                node = node.next;
            }
            return last
        }
    }

    clear() {
        this.head = null;
    }

    removeFirst() {
        if (!this.head) {
            return;
        }
        this.head = this.head.next;
    }

    removeLast() {
        if (!this.head) {
            return;
        }
        if (!this.head.next) {
            this.head = null;
            return;
        }

        let node = this.head.next;
        let previous = this.head;
        //This loop still loops from the start so you cannot do "if(!null) previous = null"
        //As "if(!null) previous = null" is true in the first and second loop..
        while (node.next) {
            previous = node
            node = node.next
        }

        previous.next = null;
        // previous.next = null;
    }

    insertLast(data) {
        if (!this.head) {
            this.head = new Node(data);
            return
        }
        // const lastNode = this.getLast()
        // lastNode.next = new Node(data)
        let lastNode = this.head
        while (lastNode.next) {
            lastNode = lastNode.next
        }
        lastNode.next = new Node(data)
    }

    getAt(index) {
        // if(!this.head){
        //     return null;
        // }
        let node = this.head;
        let counter = 0;
        while (node) {
            if (counter === index) {
                return node;
            }

            node = node.next;
            counter++;
        }
        return null
    }

    removeAt(index) {
        if (!this.head) {
            return null;
        }

        if (index === 0) {
            return this.head = this.head.next;
        }

        // if(index > this.size()){
        //     return null;
        // }

        let previous = this.getAt(index - 1)
        if (!previous || !previous.next) {
            return;
        } else {
            //It is ok if previous.next.next is null as it means previous.next is the last node
            previous.next = previous.next.next;
        }
    }

    insertAt(data, index) {
        if (!this.head) {
            return this.head = new Node(data);
        }
        if (index === 0) {
            return this.head = new Node(data, this.head);
        }
        const previous = this.getAt(index - 1)

        if (!previous) {
            this.insertLast(data);
        } else {
            const node = new Node(data, previous.next);
            previous.next = node;
        }

    }

    forEach(fun) {
        let node = this.head;
        let counter = 0;
        while (node) {
            fun(node, counter)
            node = node.next;
            counter++;
        }
    }


    //     const node = new Node(data)
    //     if(this.head){
    //         // const nextNode = this.head;
    //         node.next = this.head;
    //         this.head = node;
    //     }else {
    //         this.head = node;
    //     }
    //     return this.head;
    //     this.head = new Node(data, this.head)
    // }
}


const list = new LinkedList();
list.head = new Node(5)
list.insertFirst(10)
list

module.exports = { Node, LinkedList };
