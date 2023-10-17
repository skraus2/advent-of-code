const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'input.txt'), 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }
    console.log(isNice(data));
});

function isNice(input) {
    const strings = input.trim().split('\n');

    let niceCount = 0;

    for (let string of strings) {

        if (!string.match(/(..)(?=.*\1)/)) continue;

        if (!string.match(/(.).\1/)) continue;

        niceCount++;
    }
    return niceCount;
}
