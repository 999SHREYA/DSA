var minOperations = function(grid, x) {
    let arr = [];

    // Step 1: Flatten
    for (let row of grid) {
        for (let num of row) {
            arr.push(num);
        }
    }

    // Step 2: Feasibility check
    let base = arr[0];
    for (let num of arr) {
        if ((num - base) % x !== 0) {
            return -1;
        }
    }

    // Step 3: Sort
    arr.sort((a, b) => a - b);

    // Step 4: Median
    let median = arr[Math.floor(arr.length / 2)];

    // Step 5: Count operations
    let operations = 0;
    for (let num of arr) {
        operations += Math.abs(num - median) / x;
    }

    return operations;
};