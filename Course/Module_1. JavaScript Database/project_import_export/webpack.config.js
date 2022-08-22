const HtmlWebpackPlugin = require('html-webpack-plugin');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const path = require('path');

module.exports = {
	mode:"development",
	entry:path.resolve(__dirname, "main.js"),
	output:{
		filename:'main_bundle.js',
		path:path.resolve(__dirname, 'dist'),
		clean:true,
	},
	devServer: {
		static: path.resolve(__dirname,"dist"),
		port: 8080,
		open: true,
	},
	plugins:[
		new HtmlWebpackPlugin({
			template:path.resolve(__dirname, "index.html"),
		}),
		new CleanWebpackPlugin()
	],
	module:{
		rules:[
			{
				test:/\.m?js$/,
				exclude:/(node_modules|bower_components)/,
				use:{
					loader:'babel-loader',
					options:{
						presets:['@babel/preset-env']
					}
				}
			},
			{
				test: /\.css$/i,
				use: ['style-loader', 'css-loader'],
			},
			{
				test: /\.(png|svg|jpg|jpeg|gif)$/i,
				type: 'asset/resource',
			},
			{
				test: /\.(woff|woff2|eot|ttf|otf)$/i,
				type: 'asset/resource',
			},
		]
	},

};