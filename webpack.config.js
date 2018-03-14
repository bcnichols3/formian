'use strict';

const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const plugins = [
	new webpack.LoaderOptionsPlugin({
			options: {
			context: path.join(__dirname, 'src'),
			output: {
				path: path.join(__dirname, 'www')
			}
		}
	}),
	new ExtractTextPlugin('style.css'),
	new webpack.optimize.UglifyJsPlugin()
];

module.exports = {
    entry: ['./src/styles/index.scss'],
    output: {
        path: path.join(__dirname, 'build'),
        filename: 'style.css'
    },
    devtool: 'source-map',
	resolve: {
		extensions: [".webpack.js", ".web.js", ".js", ".jsx", ".json", ".react", ".scss", ".css"]
	},
    module: {
        rules: [
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            }
        ]
    },
    plugins
};
