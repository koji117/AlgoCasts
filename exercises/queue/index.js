// --- Description
// Create a queue data structure.  The queue
// should be a class with methods 'add' and 'remove'.
// Adding to the queue should store an element until
// it is removed
// --- Examples
//     const q = new Queue();
//     q.add(1);
//     q.remove(); // returns 1;

class Queue {
    q = []

    constructor() {
    }

    add(value) {
        this.q.unshift(value);
    }

    remove() {
        return this.q.pop()
    }
}

const q = new Queue()
q.add()

module.exports = Queue;
