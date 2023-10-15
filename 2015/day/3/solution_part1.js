const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'input.txt'), 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }
    console.log(housesWithPresents(data));
});

function housesWithPresents(directions) {
    let x = 0, y = 0;

    const moves = {
        '^': {x: 0, y: 1},
        'v': {x: 0, y: -1},
        '>': {x: 1, y: 0},
        '<': {x: -1, y: 0}
    };
    
    let visitedHouses = new Set();
    visitedHouses.add(`${x},${y}`);

    for (let direction of directions) {
        if (moves[direction]) {
            x += moves[direction].x;
            y += moves[direction].y;
        } else {
            console.warn(`Unexpected direction: ${direction}`);
        }
        visitedHouses.add(`${x},${y}`);
    }
    return visitedHouses.size;
}
