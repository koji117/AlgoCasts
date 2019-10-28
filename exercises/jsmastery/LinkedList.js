class LinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        if (index === 0) {
            this.head = new Node(value, this.head);
            return this;
        }
        const previousNode = this.getIndexNode(index - 1)
        const holdingPointer = previousNode.next;
        previousNode.next = new Node(value, holdingPointer)
        this.length++;
        return this;
    }

    remove(index) {
        if (index === 0) {
            this.head = this.head.next;
            return this;
        }
        if (index > this.length) {
            const node = this.getIndexNode(this.length - 2);
            node.next = null;
            return this;
        }

        let previousNode = this.getIndexNode(index - 1);
        if (previousNode) {
            previousNode.next = previousNode.next.next;
            this.length--;
        }


        return this;
    }

    getIndexNode(index) {
        let counter = 0;
        let node = this.head;
        while (node) {
            if (counter === index) {
                return node;
            }
            counter++;
            node = node.next;
        }
        throw new Error("index out of range")
    }

    printList() {
        let node = this.head;
        while (node) {
            console.log(node.value)
            node = node.next;
        }
    }
}

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const ll = new LinkedList(1);
ll.append(2)
ll.append(2)
ll.append(2)
ll.append(2)
ll.append(2)
// ll.insert(0, 30)
// ll.insert(3, 30)
ll.insert(1, 30)
ll.insert(ll.length, 100)
// ll.remove(100)
ll.printList();
// console.log(ll)

