class Stack {
    constructor() {
        this.top = null;
        this.bottom = null;
        this.length = 0;
    }

    peek() {
        return this.top;
    }

    push(value) {
        this.top = new Node(value, this.top);
        // //When initialize this stack
        if (this.length === 0) {
            this.bottom = this.top;
        }
        this.length++;
        return this;
        // const newNode = new Node(value)
        // //Initialize this stack
        // if (this.length === 0){
        //     this.top = newNode;
        //     this.bottom = newNode;
        // } else {
        //     const holdingPointer = this.top;
        //     this.top = newNode;
        //     this.top.next = holdingPointer;
        // }
        // this.length++;
        // return this;
    }

    pop() {
        if (!this.top) {
            return null;
        }
        if (this.top === this.bottom) {
            this.bottom = null;
        }
        const removed = this.top;
        this.top = this.top.next;
        this.length--;
        return removed;
    }
}

class Node {
    constructor(value, next = null) {
        this.value = value;
        this.next = next;
    }
}

const stack = new Stack();
stack.push("esri");
// stack.push("google");
// stack.push("microsoft");
// stack.push("esri");
stack.pop();
console.log(stack);
