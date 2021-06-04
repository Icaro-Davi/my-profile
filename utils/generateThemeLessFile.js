const fs = require('fs');
const path = require('path');
const lessToJs = require('less-vars-to-js');


function createClass(key = '', value) {
    const splitKey = key.replace("@", '').split('-'); 

    let themeType = splitKey[0];
    let property = splitKey[1];
    let className = splitKey[2];

    const fullClassName = `.nz-${themeType}-${property}-${className}`;

    switch (className) {
        case 'text':            
            return (`${fullClassName} { & p, span, a, div, .text { ${property}: ${value} !important; }} \n`);
        case 'title':
            return (`${fullClassName} { & h1, h2, h3, h4, .title { ${property}: ${value} !important; }} \n`);
        default:
            return (`${fullClassName} { ${property}: ${value}; }\n`);
    }
}

module.exports = function generateThemeLessFile() {
    const colors = lessToJs(fs.readFileSync(path.resolve(__dirname, '../assets/styles/Colors.less'), 'utf8'));
    let themeLess = '';

    Object.keys(colors).forEach(key => {
        if (key.match(/^@dark-/g) || key.match(/^@light-/g)) {
            themeLess += createClass(key, colors[key]);
        }
    });

    fs.writeFileSync('./assets/styles/Themes.less', themeLess, {
        encoding: 'utf-8',
    });
}