
const path = require('path');
const webpack = require('webpack');
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
    "devtool": "source-map",
    "entry": [
        'webpack-dev-server/client?http://localhost:3000',
        'webpack/hot/only-dev-server',
        './src/index.jsx'
    ],
    "output": {
        path: path.join(__dirname, 'public'),
        filename: "bundle.js"
    },
    "devServer": {
        port: 3000,
        contentBase: './public',
        hot: true
    },
    "module": {
        "rules": [
            {
                test: /\.(js|jsx)?$/,
                loader: 'react-hot-loader!babel-loader',
                exclude: /node_modules/
            },
            {
                "test": /\.scss$/,
                "loaders": ["style-loader", "css-loader?sourceMap", "sass-loader?sourceMap"]
            },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                    'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                    'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]

            },
            {   test: /\.woff(2?)(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/font-woff" },
			{   test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=application/octet-stream" },
			{   test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, loader: "file-loader" },
			{   test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, loader: "url-loader?limit=10000&mimetype=image/svg+xml" },
            {
                test: /\.(jpe?g|png|gif|svg)$/i,
                loaders: [
                  'file-loader?hash=sha512&digest=hex&name=[hash].[ext]',
                  'image-webpack-loader?bypassOnDebug&optimizationLevel=7&interlaced=false'
                ]
            }
        ]
    },
    "plugins": [
        new webpack.HotModuleReplacementPlugin(),
        new UglifyJSPlugin({
            mangle: {
                // Skip mangling these
                except: ['$super', '$', 'exports', 'require']
            }
        })
    ]
};
