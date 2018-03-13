'use strict';

const webpack = require('webpack');
const fs = require('fs');
const path = require('path');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const LiveReloadPlugin = require('webpack-livereload-plugin');
const BundleAnalyzerPlugin = require('webpack-bundle-analyzer').BundleAnalyzerPlugin;

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
	new webpack.EnvironmentPlugin({NODE_ENV: 'development'}),
	// new BundleAnalyzerPlugin({openAnalyzer: true}),
];

// if (process.env.NODE_ENV === 'production') {
// 	plugins.push(new webpack.optimize.UglifyJsPlugin());
// }

module.exports = {
    entry: ['./browser/index.jsx', './styles/index.scss'],
    output: {
        path: path.join(__dirname, 'public'),
        filename: 'bundle.js'
    },
    devtool: 'source-map',
	resolve: {
		extensions: [".webpack.js", ".web.js", ".js", ".jsx", ".json", ".react"]
	},
    module: {
        rules: [
            {
                test: /\.jsx?$/,
                exclude: /(node_modules|bower_components)/,
                loader: 'babel-loader',
                options: {
                    presets: ['react', 'env']
                }
            },
            {
                test: /\.s?css$/,
                use: ExtractTextPlugin.extract({
                    fallback: 'style-loader',
                    use: ['css-loader', 'sass-loader']
                })
            },
            {
                test: /\.(png|jpe?g|gif)(\?\S*)?$/,
                loader: 'url-loader?limit=100000?name=img/[name].[ext]'
            },
			{
				test: /\.woff(2)?(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'url-loader?limit=10000&mimetype=application/font-woff&name=font/[name].[ext]'
			},
			{
				test: /\.(ttf|eot|svg)(\?v=[0-9]\.[0-9]\.[0-9])?$/,
				loader: 'file-loader?name=font/[name].[ext]'
			}
        ]
    },
    plugins
};
