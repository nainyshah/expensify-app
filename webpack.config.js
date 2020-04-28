const path = require('path');

module.exports = {
	entry: './src/app.js',
	output: {
		path: path.join(__dirname, 'public'),
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
				use: ['style-loader', 'css-loader', 'sass-loader'],
			},
			{
				test: /\.(png|jpg|gif)$/,
				loader: 'url-loader',
			},
		],
	},
	devtool: 'cheap-module-eval-source-map',
	devServer: {
		contentBase: path.join(__dirname, 'public'),
		historyApiFallback: true,
	},
};

// we need to convert js file into jsx
// and css file into scss
// to convert js syntax into jsx os css into scss we will use babel component named : babel-core
// babel-loader teach webpack that how to run babel when see certian files.
// for react we have to tell babel-loader that for what envoirnment you have to execute commands
//
