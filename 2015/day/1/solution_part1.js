const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'input.txt'), 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }
    console.log(findFloor(data));
});

function findFloor(instructions) {
    let floor = 0;
    for (let i = 0; i < instructions.length; i++) {
        if (instructions[i] === '(') {
            floor++;
        } else if (instructions[i] === ')') {
            floor--;
        }
    }
    return floor;
}
