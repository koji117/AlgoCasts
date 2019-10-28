function containsSameItem(array1, array2 = []) {
    let map = {};
    for (let char of array1) {
        if (!map[char]) {
            map[char] = true;
        }
    }

    for (let char of array2) {
        if (map[char]) {
            return true;
        }
    }

    return false;
}

function containsSameItem2(array1, array2 = []) {
    return array1.some((value) => {
        return array2.includes(value);
    })
}

function hasPairWithSum(array, sum) {
    const comp = new Set();
    for (let num of array) {
        if (comp.has(num)) {
            return true;
        }
        comp.add(sum - num)
    }
    return false;
}

// console.log(hasPairWithSum([1, 2, 5], 4))

function test(array) {
    for (let char of array) {
        console.log(encodeURIComponent(char).replace(/%../g, "x").length)
    }
}

console.log(new Blob(['1']).size)


