var webpack = require('webpack'),
    path = require('path');

module.exports = {
    devtool: 'eval-source-map',
    entry: {
        main: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './src/main.jsx'
        ]
    },
    output : {
        filename : './[name].js',
        path: path.join(__dirname, 'public'),
        publicPath: '/public/'
    },
    plugins: [
        new webpack.HotModuleReplacementPlugin(),
        new webpack.NoErrorsPlugin()
    ],
    module : {
        loaders :[
            {
                test : /\.jsx?$/,
                include: path.join(__dirname, 'src'),
                // exclude : /node_modules|typings/,
                loaders : ['react-hot', 'babel?presets[]=es2015,presets[]=react'],
                
            }
        ]
    }
}

/*loaders: ['react-hot', 'babel?presets[]=es2015,presets[]=stage-0,presets[]=react,plugins[]=transform-runtime']
loader: 'react-hot!babel',
                query: {
                    presets: ['react', 'es2015']
                }*/