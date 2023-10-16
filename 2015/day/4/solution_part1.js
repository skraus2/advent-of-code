const crypto = require('crypto');

function mineAdventCoin(secretKey) {
    let number = 0;

    while (true) {
        const data = secretKey + number;
        const hash = crypto.createHash('md5').update(data).digest('hex');

        if (hash.startsWith('00000')) {
            return number;
        }

        number++;
    }
}

console.log(mineAdventCoin('iwrupvqb'));
