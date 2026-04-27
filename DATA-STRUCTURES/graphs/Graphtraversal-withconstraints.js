function hasValidPath(grid) {
    const m = grid.length;
    const n = grid[0].length;

    // direction mapping for each type
    const dirs = {
        1: [[0, -1], [0, 1]],      // left, right
        2: [[-1, 0], [1, 0]],      // up, down
        3: [[0, -1], [1, 0]],      // left, down
        4: [[0, 1], [1, 0]],       // right, down
        5: [[0, -1], [-1, 0]],     // left, up
        6: [[0, 1], [-1, 0]]       // right, up
    };

    // reverse direction check
    function isConnected(from, to) {
        for (let [dx, dy] of dirs[to]) {
            if (dx === -from[0] && dy === -from[1]) {
                return true;
            }
        }
        return false;
    }

    const queue = [[0, 0]];
    const visited = new Set();
    visited.add("0,0");

    while (queue.length) {
        let [x, y] = queue.shift();

        if (x === m - 1 && y === n - 1) return true;

        for (let [dx, dy] of dirs[grid[x][y]]) {
            let nx = x + dx;
            let ny = y + dy;

            if (nx < 0 || ny < 0 || nx >= m || ny >= n) continue;

            if (visited.has(nx + "," + ny)) continue;

            // check reverse connection
            if (isConnected([dx, dy], grid[nx][ny])) {
                visited.add(nx + "," + ny);
                queue.push([nx, ny]);
            }
        }
    }

    return false;
}