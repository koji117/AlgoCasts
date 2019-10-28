class HashTable {
    constructor(size) {
        this.data = new Array(size);
    }

    _hash(key) {
        let hash = 0;
        for (let i = 0; i < key.length; i++) {
            hash = (hash + key.charCodeAt(i) * i) % this.data.length
        }
        return hash;
    }

    set(key, value) {
        let address = this._hash(key);
        if (!this.data[address]) {
            this.data[address] = [];
        }
        this.data[address].push([key, value]);
    }

    get(key) {
        let address = this._hash(key);
        let currentArray = this.data[address];
        // in case there is collision
        if (currentArray) {
            for (let array of currentArray) {
                if (array[0] === key) {
                    return array[1]
                }
            }
        }
        return undefined
    }

    keys() {
        console.log(this.data);
        let keys = [];
        for (let array of this.data) {
            if (array) {
                keys.push(array[0][0]);
            }
        }
        return keys;
    }
}

const hashTable = new HashTable(52);

// hashTable.set("grapes", 10000);
// hashTable.set("grapes", 10000);
// hashTable.set("apple", 54);
// console.log(hashTable.keys())

/**/

function detectFirstRecurring(array) {
    const map = {};
    for (let num of array) {
        if (map[num]) {
            return num;
        }
        map[num] = true;
    }
    console.log(map)
    return false;
}

function detectFirstRecurring2(array) {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] !== array[j]) {
                break;
            } else if (array[i] === array[j]) {
                return array[i]
            }
        }
    }
    return undefined
}

firstRecurringChar = array => {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] !== array[j]) {
                break;
            } else if (array[i] === array[j]) {
                return array[i];
            }
            return undefined;
        }
    }
}

console.log(detectFirstRecurring2([2, 3, 3, 2, 4, 5, 1, "a", 21]))
