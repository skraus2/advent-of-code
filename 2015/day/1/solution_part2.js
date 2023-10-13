const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'input.txt'), 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }
    console.log(findBasementEntryPosition(data));
});

function findBasementEntryPosition(instructions) {
    let floor = 0;
    for (let i = 0; i < instructions.length; i++) {
        if (instructions[i] === '(') {
            floor++;
        } else if (instructions[i] === ')') {
            floor--;
        }
        
        if (floor === -1) {
            return i + 1;
        }
    }
    return "Santa never enters the basement with the given instructions.";
}
