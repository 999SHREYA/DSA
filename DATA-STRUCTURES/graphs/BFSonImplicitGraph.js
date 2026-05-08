/**
 * @param {number[]} nums
 * @return {number}
 */
var minJumps = function(nums) {
    const n = nums.length;
    if (n === 1) return 0;

    // -----------------------------
    // Sieve for smallest prime factor
    // -----------------------------
    const MAX = Math.max(...nums);
    const spf = Array(MAX + 1).fill(0);

    for (let i = 2; i <= MAX; i++) {
        if (spf[i] === 0) {
            for (let j = i; j <= MAX; j += i) {
                if (spf[j] === 0) spf[j] = i;
            }
        }
    }

    // -----------------------------
    // Get unique prime factors
    // -----------------------------
    function getPrimeFactors(x) {
        const factors = [];

        while (x > 1) {
            const p = spf[x];
            factors.push(p);

            while (x % p === 0) {
                x /= p;
            }
        }

        return factors;
    }

    // -----------------------------
    // Map: prime -> indices divisible by prime
    // -----------------------------
    const primeToIndices = new Map();

    for (let i = 0; i < n; i++) {
        const factors = getPrimeFactors(nums[i]);

        for (const p of factors) {
            if (!primeToIndices.has(p)) {
                primeToIndices.set(p, []);
            }
            primeToIndices.get(p).push(i);
        }
    }

    // -----------------------------
    // Prime check
    // -----------------------------
    function isPrime(x) {
        return x >= 2 && spf[x] === x;
    }

    // -----------------------------
    // BFS
    // -----------------------------
    const queue = [[0, 0]]; // [index, steps]
    const visited = Array(n).fill(false);
    visited[0] = true;

    // To avoid reusing same prime teleport many times
    const usedPrime = new Set();

    let head = 0;

    while (head < queue.length) {
        const [i, steps] = queue[head++];

        if (i === n - 1) return steps;

        // Adjacent moves
        const neighbors = [i - 1, i + 1];

        for (const ni of neighbors) {
            if (ni >= 0 && ni < n && !visited[ni]) {
                visited[ni] = true;
                queue.push([ni, steps + 1]);
            }
        }

        // Prime teleport
        const val = nums[i];

        if (isPrime(val) && !usedPrime.has(val)) {
            usedPrime.add(val);

            const nextIndices = primeToIndices.get(val) || [];

            for (const ni of nextIndices) {
                if (!visited[ni]) {
                    visited[ni] = true;
                    queue.push([ni, steps + 1]);
                }
            }
        }
    }

    return -1;
};