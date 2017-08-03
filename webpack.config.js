var path = require('path')
var webpack = require('webpack')

module.exports = {  
    entry: './src/js/app.js',
    output: {
        path: path.resolve(__dirname, 'dist'),
        publicPath: '/dist',
        filename: 'bundle.js'
    },
    module: {
        rules: [
	  		{
        		test: /\.js$/,
        		loader: 'babel-loader',
        		exclude: /node_modules/
      		},
      		{
        		test: /\.(png|jpg|gif|svg)$/,
        		loader: 'file-loader',
        		options: {
          			name: '[name].[ext]?[hash]'
        		}
      		},
			{
				test: /\.css$/,
				use: [
					'style-loader',
					'css-loader'
				]
			},
            {   test: /\.eot(\?v=\d+\.\d+\.\d+)?$/, 
                loader: "file-loader" 
            },
            { 
                test: /\.(woff|woff2)$/, 
                loader:"url-loader?prefix=font/&limit=5000" 
            },
            { 
                test: /\.ttf(\?v=\d+\.\d+\.\d+)?$/, 
                loader: "url-loader?limit=10000&mimetype=application/octet-stream" 
            },
            { 
                test: /\.svg(\?v=\d+\.\d+\.\d+)?$/, 
                loader: "url-loader?limit=10000&mimetype=image/svg+xml" 
            }
            
        ]
	}
}


