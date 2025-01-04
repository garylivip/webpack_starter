const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

module.exports = {
    mode: 'production', // 'production' or 'development'
    // if not specified, the default value is './src', filename is 'index.js'    
    // if not specified, the default value is './dist', default filename is 'main.js'
    // it could single entry point, like above entry: path.resolve(__dirname, 'src', 'index.js'),
    // or multiple entry points
    entry: {
        bundle: path.resolve(__dirname, 'src', 'index.js'),
        // bundle2: path.resolve(__dirname, 'src', 'index.js') // multiple entry points
    },
    output: {
        path: path.resolve(__dirname, 'dist'),
        filename: '[name][contenthash].js', // [name] is the key of the entry object or the name of the entry point like 'bundle'
        // contenthash is a hash of the content of the file, so if the content changes, the hash changes
        clean: true, // Clean the output directory before emit
        assetModuleFilename: '[name][ext]' 
    },
    devtool: 'source-map', // Enable sourcemaps for debugging webpack's output  inline-source-map || source-map
    devServer:{
        static: {
            directory: path.join(__dirname, 'dist'),
        },
        port: 9000, // Specify the port
        open: true, // Open the browser
        hot: true, // Hot Module Replacement
        compress: true, // Enable gzip compression
        historyApiFallback: true, // true for index.html upon 404, object for multiple paths
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
            },
            {
                test: /\.?js$/,
                exclude: /node_modules/,
                use: {
                    loader: 'babel-loader',
                    options: {
                        presets: ['@babel/preset-env']
                    }
                }
            },
            {
                test: /\.(png|svg|jpg|jpeg|gif)$/i,
                type: 'asset/resource',
            }
            
        ]
    },
    plugins:[
        new HtmlWebpackPlugin({
            title: 'Webpack 5 Starter',
            filename: 'index.html',
            template: path.resolve(__dirname, 'src', 'template.html'),
        }),
        // new BundleAnalyzerPlugin()
    ]
};