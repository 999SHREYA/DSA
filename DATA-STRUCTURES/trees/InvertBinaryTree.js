var invertTree = function(root) {
    if (root === null) return null;

    // swap
    let temp = root.left;
    root.left = root.right;
    root.right = temp;

    // recurse
    invertTree(root.left);
    invertTree(root.right);

    return root;
};