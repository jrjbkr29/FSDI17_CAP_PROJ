var webpack = require('webpack');
var path = require('path');


module.exports = {
    module: {
        rules: [
            {
                test: /\.js$/,
                exclude: /node_modules/,
                use: {
                    loader: "babel-loader"
                }
            },

            {
                test: /\.(sass|less|css)$/,
                use: ['style-loader', 'css-loader', 'less-loader']
              }

        ],
    },

    resolve: {
        extensions: ['', '.js', '.jsx', '.css'],
        modules: [
          'node_modules'
        ]        
    }

}