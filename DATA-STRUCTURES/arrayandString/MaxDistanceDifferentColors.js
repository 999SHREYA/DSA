var maxDistance = function(colors) {
    let n = colors.length;
    let maxDist = 0;

    // Case 1: compare with first house
    for (let i = n - 1; i >= 0; i--) {
        if (colors[i] !== colors[0]) {
            maxDist = i; // distance = i - 0
            break;
        }
    }

    // Case 2: compare with last house
    for (let i = 0; i < n; i++) {
        if (colors[i] !== colors[n - 1]) {
            maxDist = Math.max(maxDist, n - 1 - i);
            break;
        }
    }

    return maxDist;
};