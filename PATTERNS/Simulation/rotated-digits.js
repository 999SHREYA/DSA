/**
 * @param {number} n
 * @return {number}
 */
var rotatedDigits = function(n) {
    // Digits that become invalid after rotation
    const invalid = new Set([3, 4, 7]);

    // Digits that change after rotation
    const changed = new Set([2, 5, 6, 9]);

    let count = 0;

    for (let i = 1; i <= n; i++) {
        let num = i;
        let isGood = false;
        let valid = true;

        while (num > 0) {
            let digit = num % 10;

            // Invalid digit found
            if (invalid.has(digit)) {
                valid = false;
                break;
            }

            // Digit changes after rotation
            if (changed.has(digit)) {
                isGood = true;
            }

            num = Math.floor(num / 10);
        }

        if (valid && isGood) {
            count++;
        }
    }

    return count;
};