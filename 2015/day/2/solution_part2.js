const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'input.txt'), 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }
    console.log(calculateTotalRibbon(data));
});

function calculateTotalRibbon(input) {
    const presents = input.trim().split('\n');
    let totalRibbon = 0;

    for(present of presents) {
        let [l, w, h] = present.split('x').map(Number);

        let lwPerimeter = 2 * (l + w);
        let whPerimeter = 2 * (w + h);
        let hlPerimeter = 2 * (h + l);
        let smallestPerimeter = Math.min(lwPerimeter, whPerimeter, hlPerimeter);

        let volume = l * w * h;

        totalRibbon += smallestPerimeter + volume;
    }
    return totalRibbon;
}