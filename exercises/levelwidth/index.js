// --- Directions
// Given the root node of a tree, return
// an array where each element is the width
// of the tree at each level.
// --- Example
// Given:
//     0
//   / |  \
// 1   2   3
// |       |
// 4       5
// Answer: [1, 3, 2]

function levelWidth(root) {
    let array = [root, "EOL"];
    const width = [0];
    while (array.length > 1) {
        const first = array.shift();
        if (first === "EOL") {
            // counter.push(array.length - 1)
            width.push(0);
            array.push(first)
        } else {
            width[width.length - 1]++;
            array.push(...first.children)
        }
    }
    return width;
}

module.exports = levelWidth;
