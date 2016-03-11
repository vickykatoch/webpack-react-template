var webpack = require('webpack'),
    path = require('path');

module.exports = {
    context : path.resolve('src'),
    devtool: 'eval-source-map',
    entry: {
        main: [
        'webpack-dev-server/client?http://localhost:8080',
        'webpack/hot/only-dev-server',
        './main.jsx'
        ]
    },
    output : {
        path: path.join(__dirname, 'public/js'),
        publicPath: '/public/assets/js',
        filename : './[name].js'
    },
    devServer:{
        contentBase : 'src'
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