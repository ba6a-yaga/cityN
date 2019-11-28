const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const OptimizeCssAssetsPlugin = require('optimize-css-assets-webpack-plugin');

module.exports = {
    mode: 'development',
    entry: './src/js/main.js',
    module: {
        rules: [
            {
                test: /\.m?js$/,
                loader: 'babel-loader',
            },
            {
                test: /\.(s*)css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader',],

                })
            },
            {
                test: /\.(eot|woff|woff2|svg|ttf)([\?]?.*)$/,
                use: ['raw-loader']
            },

        ]

    },
    output: {
        filename: './js/main.js',
        path: path.resolve(__dirname, './dist/'),
    },
    plugins: [
        new ExtractTextPlugin({filename: './css/style.css'}),
        new OptimizeCssAssetsPlugin({
            cssProcessor: require('cssnano'),
            cssProcessorPluginOptions: {
                preset: ['default',
                    {
                        discardComments: {removeAll: true},
                    }],
            },
            canPrint: true
        }),
    ],
};
