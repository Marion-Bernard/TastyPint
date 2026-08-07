const fs = require('fs');
const path = require('path');

const { getDistinctFoodList } = require('./BrewdogApiService');

async function run() {
    try {
        const foods = await getDistinctFoodList();
        const content = `module.exports = ${JSON.stringify(foods, null, 4)};\n`;
        const outputPath = path.join(__dirname, 'foodList.js');

        fs.writeFileSync(outputPath, content, 'utf8');

        console.log(`Food list saved to ${outputPath}`);
        console.log(foods);
    } catch (err) {
        console.error(err);
    }
}

run();