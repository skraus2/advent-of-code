const fs = require('fs');
const path = require('path');

fs.readFile(path.join(__dirname, 'input.txt'), 'utf8', (err, data) => {
    if (err) {
        console.error("Error reading the file:", err);
        return;
    }
    console.log(calculateTotalWrappingPaper(data));
});

function calculateTotalWrappingPaper(input) {
    const presents = input.trim().split('\n');
    let totalWrappingPaper = 0;

    for(present of presents) {
        let [l, w, h] = present.split('x').map(Number);

        let lw = l * w;
        let wh = w * h;
        let hl = h * l;

        let surfaceArea = 2 * lw + 2 * wh + 2 * hl;

        let smallestSideArea = Math.min(lw, wh, hl);

        totalWrappingPaper += surfaceArea + smallestSideArea;
    }
    return totalWrappingPaper;
}
