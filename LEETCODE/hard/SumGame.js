var sumGame = function(num) {
    const n = num.length;
    const half = n / 2;

    let diff = 0;
    let leftQ = 0;
    let rightQ = 0;

    for (let i = 0; i < half; i++) {
        if (num[i] === '?') {
            leftQ++;
        } else {
            diff += Number(num[i]);
        }
    }

    for (let i = half; i < n; i++) {
        if (num[i] === '?') {
            rightQ++;
        } else {
            diff -= Number(num[i]);
        }
    }

    if ((leftQ + rightQ) % 2 === 1) {
        return true;
    }

    const requiredDiff = 9 * (rightQ - leftQ) / 2;

    return diff !== requiredDiff;
};

// Test
console.log(sumGame("5023"));
console.log(sumGame("25??"));
console.log(sumGame("?3295???"));
console.log(sumGame("??6?6000?3"));