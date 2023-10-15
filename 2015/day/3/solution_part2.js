const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'input.txt'), 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }
    console.log(housesWithPresentsWithRobot(data));
});

function housesWithPresentsWithRobot(directions) {
    let santaX = 0, santaY = 0, roboX = 0, roboY = 0;

    const moves = {
        '^': {x: 0, y: 1},
        'v': {x: 0, y: -1},
        '>': {x: 1, y: 0},
        '<': {x: -1, y: 0}
    };

    let visitedHouses = new Set();
    visitedHouses.add(`0,0`);

    for (let i = 0; i < directions.length; i++) {
        const direction = directions[i];
        const isSanta = i % 2 === 0;

        if (moves[direction]) {
            if (isSanta) {
                santaX += moves[direction].x;
                santaY += moves[direction].y;
            } else {
                roboX += moves[direction].x;
                roboY += moves[direction].y;
            }
        } else {
            console.warn(`Unexpected direction: ${direction}`);
        }
        
        visitedHouses.add(`${isSanta ? santaX : roboX},${isSanta ? santaY : roboY}`);
    }
    return visitedHouses.size;
}
