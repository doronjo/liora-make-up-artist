
var resolve = require('path').resolve;
var webpack = require('webpack');

var commonPlugin = new webpack.optimize.CommonsChunkPlugin({name:'commons',filename:'commons.js'});

module.exports = {
    context:resolve('src'),
    entry:{
        main:"./main.ts" ,
        polyfills: "./polyfills.ts" ,
        vendors:'./vendors.ts'
    },
    output:{
        path:resolve('build/js'),
        publicPath:'/js',
        filename:"[name].js"
    },
    plugins:[commonPlugin],

    devServer:{
        contentBase:'build'
    },
    watch:true,
     
    module:{
        rules:[
            {
                test:/\.ts$/,
                exclude:/node_module/,
                use:{loader:'awesome-typescript-loader'}
            }
        ]
    },

    resolve:{
        extensions:['.js' ,'.ts']
    }
    
} 