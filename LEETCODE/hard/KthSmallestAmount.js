var findKthSmallest = function(coins, k) {

    function gcd(a, b) {
        while (b !== 0) {
            let temp = a % b;
            a = b;
            b = temp;
        }
        return a;
    }

    function lcm(a, b) {
        return (a / gcd(a, b)) * b;
    }

    function count(x) {
        let total = 0;
        let n = coins.length;

        for (let mask = 1; mask < (1 << n); mask++) {

            let currentLCM = 1;
            let bits = 0;
            let valid = true;

            for (let i = 0; i < n; i++) {

                if (mask & (1 << i)) {

                    bits++;

                    currentLCM = lcm(currentLCM, coins[i]);

                    if (currentLCM > x) {
                        valid = false;
                        break;
                    }
                }
            }

            if (!valid) continue;

            let amount = Math.floor(x / currentLCM);

            if (bits % 2 === 1) {
                total += amount;
            } else {
                total -= amount;
            }
        }

        return total;
    }

    let left = 1;
    let right = Math.min(...coins) * k;

    while (left < right) {

        let mid = Math.floor((left + right) / 2);

        if (count(mid) >= k) {
            right = mid;
        } else {
            left = mid + 1;
        }
    }

    return left;
};


// Test
console.log(findKthSmallest([3, 6, 9], 3)); // 9
console.log(findKthSmallest([5, 2], 7));    // 12