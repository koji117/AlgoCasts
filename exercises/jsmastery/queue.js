class Queue {
    constructor() {
        this.first = null;
        this.last = null;
        this.length = 0;
    }

    peek() {
        return this.first;
    }

    enqueue(value) {
        const newNode = new Node(value);
        // initialize this queue
        if (this.length === 0) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
            // const holdingPointer = this.last;
            // this.last = new Node(value);
            // holdingPointer.next = this.last;
        }
        this.length++;
        return this;
    }

    dequeue() {
        if (!this.first) {
            return null;
        }
        if (this.first === this.last) {
            this.last = null;
        }

        const holdingPointer = this.first;
        this.first = this.first.next;
        this.length--;
        return holdingPointer;
    }

}

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const queue = new Queue();
queue.enqueue("1");
queue.enqueue("2");
queue.enqueue("3");
queue.enqueue("4");
queue.enqueue("5");
queue.enqueue("6");
queue.enqueue("7");
queue.dequeue();
queue.dequeue();
console.log(queue)


