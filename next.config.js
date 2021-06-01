const withPlugins = require('next-compose-plugins');
const withLess = require('@zeit/next-less');
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
            modifyVars: {...themeVariables, ...colors}
        },
        webpack: (config, { isServer }) => {
            if (isServer) {
                const antStyles = /antd\/.*?\/style.*?/;
                const origExternals = [...config.externals];
                config.externals = [
                    (context, request, callback) => {
                        if (request.match(antStyles)) return callback()
                        if (typeof origExternals[0] === 'function') {
                            origExternals[0](context, request, callback)
                        } else {
                            callback()
                        }
                    },
                    ...(typeof origExternals[0] === 'function' ? [] : origExternals),
                ];

                config.module.rules.unshift({
                    test: antStyles,
                    use: 'null-loader',
                });
            }

            return config;
        }
    }
]);

module.exports = withPlugins([...plugins], nextConfig);