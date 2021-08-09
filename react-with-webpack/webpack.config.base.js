const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ForkTsCheckerWebpackPlugin = require('fork-ts-checker-webpack-plugin');
const ESLintPlugin = require('eslint-webpack-plugin');

module.exports = {
    entry: './src/index.tsx',
    output: {
        path: path.join(__dirname, 'dist'),
        filename: 'app.bundle.js'
    },
    resolve: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
    },
    module: {
        rules: [{
            test: /\.(ts|tsx)$/,
            exclude: /node_modules/,
            use: {
                loader: 'babel-loader'
            }
        },
        {
            test: /\.(css)$/,
            exclude: /node_modules/,
            use: ['style-loader', 'css-loader']
        }]
    },
    plugins: [new HtmlWebpackPlugin({
        template: './src/index.html'
    }),
    new ForkTsCheckerWebpackPlugin({
        async: false
    }),
    new ESLintPlugin()]
}