// --- Directions
// Given a node, validate the binary search tree,
// ensuring that every node's left hand child is
// less than the parent node's value, and that
// every node's right hand child is greater than
// the parent

function validate(node, min = null, max = null) {
    if (node.left) {
        if (max != null && node.data > max) {
            return false;
        }
        if (node.left < node.data) {
            return false;
        } else {
            max = node.data;
            return node.validate(node.left, null, max);
        }
    }
    if (node.right) {
        if (min != null && node.data < min) {
            return false;
        }
        if (node.right < node.data) {
            return false;
        }
        min = node.data;
        return node.validate(node.right, min);
    }
    return true;
}

module.exports = validate;
