// ==========================================
// Sliding Window Pattern
// ==========================================

// LC 2958 - Length of Longest Subarray With at Most K Frequency

function maxSubarrayLength(nums, k) {
    const freq = new Map();

    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < nums.length; right++) {
        freq.set(
            nums[right],
            (freq.get(nums[right]) || 0) + 1
        );

        while (freq.get(nums[right]) > k) {
            freq.set(
                nums[left],
                freq.get(nums[left]) - 1
            );

            left++;
        }

        maxLength = Math.max(
            maxLength,
            right - left + 1
        );
    }

    return maxLength;
}

// Test
console.log(
    maxSubarrayLength([1, 2, 3, 1, 2, 3, 1, 2], 2)
); // 6



// solution 2

function maximumLengthSubstring(s) {
    let left = 0;
    let maxLength = 0;

    const freq = new Map();

    for (let right = 0; right < s.length; right++) {
        const ch = s[right];

        freq.set(ch, (freq.get(ch) || 0) + 1);

        while (freq.get(ch) > 2) {
            const leftChar = s[left];

            freq.set(
                leftChar,
                freq.get(leftChar) - 1
            );

            left++;
        }

        maxLength = Math.max(
            maxLength,
            right - left + 1
        );
    }

    return maxLength;
}

// Test
console.log(maximumLengthSubstring("bcbbbcba")); // 4
console.log(maximumLengthSubstring("aaaa"));     // 2