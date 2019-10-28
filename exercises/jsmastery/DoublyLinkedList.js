class DoublyLinkedList {
    constructor(value) {
        this.head = new Node(value);
        this.tail = this.head;
        this.length = 1;
    }

    append(value) {
        const newNode = new Node(value, null, this.tail);
        this.tail.next = newNode;
        this.tail = newNode;
        this.length++;
        return this;
    }

    prepend(value) {
        const newNode = new Node(value, this.head);
        this.head.previous = newNode;
        this.head = newNode;
        this.length++;
        return this;
    }

    insert(index, value) {
        if (index >= this.length) {
            return this.append(value);
        }
        if (index === 0) {
            return this.prepend(value)
        }
        const previousNode = this.getIndexNode(index - 1)
        const holdingPointer = previousNode.next;
        previousNode.next = new Node(value, holdingPointer, previousNode)
        holdingPointer.previous = previousNode.next;
        this.length++;
        return this;
    }

    remove(index) {
        if (index === 0) {
            this.head = this.head.next;
            this.head.previous = null;
            return this;
        }
        if (index > this.length) {
            const node = this.getIndexNode(this.length - 2);
            node.next = null;
            return this;
        }

        let previousNode = this.getIndexNode(index - 1);

        previousNode.next = previousNode.next.next;
        previousNode.next.previous = previousNode;
        this.length--;
        return this;
    }

    reverse() {
        if (!this.head.next) {
            return this.head;
        }
        const reversed = new DoublyLinkedList(this.tail.value);
        let lastNode = this.tail.previous;
        while (lastNode) {
            reversed.append(lastNode.value);
            lastNode = lastNode.previous;
        }
        return reversed;
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
    constructor(value, next = null, previous = null) {
        this.value = value;
        this.next = next;
        this.previous = previous;
    }
}

let ll = new DoublyLinkedList(1);
ll.append(2)
ll.append(30)
// ll.insert(1, 30)
// ll.append(2)
// ll.append(2)
// ll.append(30)
// ll.append(2)
// ll.append(2)
// // ll.insert(0, 30)
// // ll.insert(3, 30)
// ll.insert(1, 30)
// ll.insert(ll.length, 100)
// ll.remove(1)
ll = ll.reverse()
ll.printList();
console.log(ll)
//
