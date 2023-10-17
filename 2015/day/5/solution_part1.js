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
    const disallowed = ['ab', 'cd', 'pq', 'xy'];

    let niceCount = 0;

    for (let string of strings) {

        const vowels = (string.match(/[aeiou]/g) || []).length;
        if (vowels < 3) continue;

        if (!string.match(/(.)\1/)) continue;

        if (disallowed.some(sub => string.includes(sub))) continue;

        niceCount++;
    }
    
    return niceCount;
}
