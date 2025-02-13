const path = require('path');
const webpack = require('webpack');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const TerserJSPlugin = require('terser-webpack-plugin');
const OptimizeCSSAssetsPlugin = require('optimize-css-assets-webpack-plugin');
process.env.NODE_ENV = process.env.NODE_ENV || 'development';
if (process.env.NODE_ENV === 'test') {
	require('dotenv').config({ path: '.env.test' });
} else if (process.env.NODE_ENV === 'development') {
	require('dotenv').config({ path: '.env.development' });
}
module.exports = (env) => {
	const isProduction = env === 'production';
	const CSSExtract = new MiniCssExtractPlugin({
		filename: 'styles.css',
	});

	return {
		entry: './src/app.js',
		output: {
			path: path.join(__dirname, 'public', 'dist'),
			filename: 'bundle.js',
		},
		module: {
			rules: [
				{
					loader: 'babel-loader',
					test: /\.js$/,
					exclude: /node_modules/,
				},
				{
					test: /\.s?css$/,
					use: [
						MiniCssExtractPlugin.loader,
						{
							loader: 'css-loader',
							options: {
								sourceMap: true,
							},
						},
						{
							loader: 'sass-loader',
							options: {
								sourceMap: true,
							},
						},
					],
				},
				{
					test: /\.(png|jpg|gif)$/,
					loader: 'url-loader',
				},
			],
		},
		optimization: {
			minimizer: [new TerserJSPlugin({}), new OptimizeCSSAssetsPlugin({})],
		},
		plugins: [
			CSSExtract,
			new webpack.DefinePlugin({
				'process.env.FIREBASE_API_KEY': JSON.stringify(
					process.env.FIREBASE_API_KEY
				),
				'process.env.FIREBASE_AUTH_DOMAIN': JSON.stringify(
					process.env.FIREBASE_AUTH_DOMAIN
				),
				'process.env.FIREBASE_DATABASE_URL': JSON.stringify(
					process.env.FIREBASE_DATABASE_URL
				),
				'process.env.FIREBASE_PROJECT_ID': JSON.stringify(
					process.env.FIREBASE_PROJECT_ID
				),
				'process.env.FIREBASE_STORAGE_BUCKET': JSON.stringify(
					process.env.FIREBASE_STORAGE_BUCKET
				),
				'process.env.FIREBASE_MESSAGING_SENDER_ID': JSON.stringify(
					process.env.FIREBASE_MESSAGING_SENDER_ID
				),
				'process.env.FIREBASE_APP_ID': JSON.stringify(
					process.env.FIREBASE_APP_ID
				),
				'process.env.FIREBASE_MEASUREMENT_ID': JSON.stringify(
					process.env.FIREBASE_MEASUREMENT_ID
				),
			}),
		],
		devtool: isProduction ? 'source-map' : 'inline-source-map',
		devServer: {
			contentBase: path.join(__dirname, 'public'),
			historyApiFallback: true,
			publicPath: '/dist/',
		},
	};
};

// we need to convert js file into jsx
// and css file into scss
// to convert js syntax into jsx os css into scss we will use babel component named : babel-core
// babel-loader teach webpack that how to run babel when see certian files.
// for react we have to tell babel-loader that for what envoirnment you have to execute commands
//
