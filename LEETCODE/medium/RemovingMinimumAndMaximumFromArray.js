
var minimumDeletions = function(nums) {
    const n = nums.length;

    // Find indices of minimum and maximum
    let minIndex = 0;
    let maxIndex = 0;

    for (let i = 1; i < n; i++) {
        if (nums[i] < nums[minIndex]) {
            minIndex = i;
        }

        if (nums[i] > nums[maxIndex]) {
            maxIndex = i;
        }
    }

    // Make sure left is the smaller index
    const left = Math.min(minIndex, maxIndex);
    const right = Math.max(minIndex, maxIndex);

    // Option 1: Remove both from the front
    const removeFromFront = right + 1;

    // Option 2: Remove both from the back
    const removeFromBack = n - left;

    // Option 3: Remove left from front and right from back
    const removeBothSides = (left + 1) + (n - right);

    return Math.min(
        removeFromFront,
        removeFromBack,
        removeBothSides
    );
};
