const { merge } = require('webpack-merge');
const baseConfig = require('./webpack.config.base.js');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;
const { CleanWebpackPlugin } = require('clean-webpack-plugin');

module.exports = merge(baseConfig, {
    mode: 'production',
    plugins: [new BundleAnalyzerPlugin({
        analyzerMode: 'static',
        openAnalyzer: false,
        reportFilename: 'bundle-report.html',
        reportTitle: 'Bundle Report',
        generateStatsFile: true,
        statsFilename: 'statistics.json'
    }),
    new CleanWebpackPlugin()],
    externalsType: 'script',
    externals: {
        // 'react': 'React',
        // 'react-dom': 'ReactDOM'
        'react': ['https://unpkg.com/react@17/umd/react.production.min.js', 'React'],
        'react-dom': ['https://unpkg.com/react-dom@17/umd/react-dom.production.min.js', 'ReactDOM']
    }
});