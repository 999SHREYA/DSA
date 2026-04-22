var twoSum = function(nums, target) {
    let i = 0;
    let j = nums.length - 1;

    while (i < j) {
        let sum = nums[i] + nums[j];

        if (sum === target) {
            return [i + 1, j + 1]; // 1-based index
        }
        else if (sum < target) {
            i++;
        }
        else {
            j--;
        }
    }
};