class TreeNode {
    constructor(val, left = null, right = null) {
        this.val = val;
        this.left = left;
        this.right = right;
    }
}

var buildTree = function(inorder, postorder) {
    const inMap = new Map();

    // store inorder indices
    for (let i = 0; i < inorder.length; i++) {
        inMap.set(inorder[i], i);
    }

    let postIndex = postorder.length - 1;

    function build(left, right) {
        if (left > right) return null;

        // root is last element in postorder
        const rootVal = postorder[postIndex--];
        const root = new TreeNode(rootVal);

        const mid = inMap.get(rootVal);

        // ⚠️ IMPORTANT: build right first
        root.right = build(mid + 1, right);
        root.left = build(left, mid - 1);

        return root;
    }

    return build(0, inorder.length - 1);
};