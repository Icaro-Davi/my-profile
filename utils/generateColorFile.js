const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');

module.exports = function generateColorFile(fileDest) {
    const colors = lessToJs(fs.readFileSync(path.resolve(__dirname, '../assets/styles/Colors.less'), 'utf8'));
    fs.writeFileSync(fileDest, JSON.stringify(colors), {
        encoding: 'utf-8',
    });
}