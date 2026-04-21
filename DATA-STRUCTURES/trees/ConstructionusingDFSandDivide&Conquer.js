var buildTree = function(preorder, inorder) {
    // hashmap: value -> index in inorder
    const inMap = new Map();
    for (let i = 0; i < inorder.length; i++) {
        inMap.set(inorder[i], i);
    }

    let preIndex = 0;

    function helper(left, right) {
        // no elements to construct subtree
        if (left > right) return null;

        // pick root from preorder
        let rootVal = preorder[preIndex++];
        let root = new TreeNode(rootVal);

        // split inorder using hashmap
        let mid = inMap.get(rootVal);

        // build left subtree
        root.left = helper(left, mid - 1);

        // build right subtree
        root.right = helper(mid + 1, right);

        return root;
    }

    return helper(0, inorder.length - 1);
};