const withPlugins = require('next-compose-plugins');
const withLess = require("next-with-less");
const lessToJs = require('less-vars-to-js');
const fs = require('fs');
const path = require('path');
const generateThemeLessFile = require('./utils/generateThemeLessFile');

const plugins = [];
const nextConfig = {
    distDir: './dist',
    webpack: (config) => {
        return config;
    }
};

const themeVariables = lessToJs(
    fs.readFileSync(path.resolve(__dirname, './assets/styles/AntCustomTheme.less'), 'utf8')
);
const colors = lessToJs(
    fs.readFileSync(path.resolve(__dirname, './assets/styles/Colors.less'), 'utf8')
);

generateThemeLessFile();

plugins.push([
    withLess,
    {
        lessLoaderOptions: {
            javascriptEnabled: true,
            lessOptions: {
                modifyVars: { ...themeVariables, ...colors }
            }
        },
    }
]);

module.exports = withPlugins([...plugins], nextConfig);