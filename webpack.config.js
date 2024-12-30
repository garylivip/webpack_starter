const path = require('path');

module.exports = {
    mode: 'development', // 'production' or 'development'
    // if not specified, the default value is './src', filename is 'index.js'    
    // if not specified, the default value is './dist', default filename is 'main.js'
    // it could single entry point, like above entry: path.resolve(__dirname, 'src', 'index.js'),
    // or multiple entry points
    entry: {
        bundle: path.resolve(__dirname, 'src', 'index.js'),
        bundle2: path.resolve(__dirname, 'src', 'index.js') // multiple entry points
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name].js' // [name] is the key of the entry object or the name of the entry point like 'bundle'
    },
    module: {
        rules: [
            {
                test: /\.s[ac]ss$/i,
                use: [
                    'style-loader',
                    'css-loader',
                    'sass-loader'
                ]
            }
        ]
    }
};