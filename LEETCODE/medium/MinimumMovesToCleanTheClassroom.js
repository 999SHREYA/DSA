var minMoves = function(classroom, energy) {
    const m = classroom.length;
    const n = classroom[0].length;

    let startR = 0;
    let startC = 0;

    const litter = [];

    // Find S and all L positions
    for (let r = 0; r < m; r++) {
        for (let c = 0; c < n; c++) {
            if (classroom[r][c] === 'S') {
                startR = r;
                startC = c;
            } else if (classroom[r][c] === 'L') {
                litter.push([r, c]);
            }
        }
    }

    const totalLitter = litter.length;

    // No litter to collect
    if (totalLitter === 0) {
        return 0;
    }

    // Map litter position -> bit number
    const litterId = new Map();

    for (let i = 0; i < totalLitter; i++) {
        const [r, c] = litter[i];
        litterId.set(r * n + c, i);
    }

    const allCollected = (1 << totalLitter) - 1;

    /*
        best[state] = maximum energy with which
        we have already reached this (row, col, mask).

        State = row + col + mask
    */

    const totalStates = m * n * (1 << totalLitter);

    const best = new Uint8Array(totalStates);

    // BFS queue
    const queue = [];

    // State:
    // [row, col, remainingEnergy, mask, moves]
    queue.push([startR, startC, energy, 0, 0]);

    best[
        ((startR * n + startC) << totalLitter) | 0
    ] = energy;

    const directions = [
        [-1, 0],
        [1, 0],
        [0, -1],
        [0, 1]
    ];

    let head = 0;

    while (head < queue.length) {
        const [r, c, currentEnergy, mask, moves] = queue[head++];

        // Try all 4 directions
        for (const [dr, dc] of directions) {
            const nr = r + dr;
            const nc = c + dc;

            // Outside grid
            if (
                nr < 0 ||
                nr >= m ||
                nc < 0 ||
                nc >= n
            ) {
                continue;
            }

            // Obstacle
            if (classroom[nr][nc] === 'X') {
                continue;
            }

            // Cannot move without energy
            if (currentEnergy === 0) {
                continue;
            }

            let newEnergy = currentEnergy - 1;
            let newMask = mask;

            // Collect litter
            const positionKey = nr * n + nc;

            if (classroom[nr][nc] === 'L') {
                const id = litterId.get(positionKey);

                newMask = mask | (1 << id);
            }

            // Reset energy on R
            if (classroom[nr][nc] === 'R') {
                newEnergy = energy;
            }

            // All litter collected
            if (newMask === allCollected) {
                return moves + 1;
            }

            const stateIndex =
                ((nr * n + nc) << totalLitter) | newMask;

            /*
                If we have already reached this position
                with the same collected litter and MORE
                energy, this state is useless.
            */
            if (best[stateIndex] >= newEnergy) {
                continue;
            }

            best[stateIndex] = newEnergy;

            queue.push([
                nr,
                nc,
                newEnergy,
                newMask,
                moves + 1
            ]);
        }
    }

    return -1;
};