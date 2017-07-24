
var resolve = require('path').resolve;
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var commonPlugin = new webpack.optimize.CommonsChunkPlugin({name:'commons',filename:'js/commons.js'});
var extractTextPlugin = new ExtractTextPlugin('css/style.css');
var jqueryProviderPlugin =  new webpack.ProvidePlugin({'window.jQuery':'jquery', '$': 'jquery','jquery': 'jquery','jQuery': 'jquery',});

module.exports = {
    context:resolve('src'),
    entry:{
        main:"./main.ts" ,
        polyfills: "./polyfills.ts" ,
        vendors:'./vendors.ts'
    },
    output:{
        path:resolve('build'),
        publicPath:'./',
        filename:"js/[name].js"
    },
    devServer:{
        contentBase:'build',
        hot:true
    },
    watch:true,
     
    module:{
        rules:[
            {
                test:/\.ts$/,
                exclude:/node_module/,
                use:[{loader:'awesome-typescript-loader'},{loader:'angular2-template-loader'}]
            },
            {
                test: /\.scss$/,
                exclude:/node_module/,
                use: ['css-to-string-loader','css-loader' , 'sass-loader']
            },
            {
                test:/\.css$/,
                use :ExtractTextPlugin.extract({use:['css-loader']})
            },
            {
                test: /.(png|jpg|jpeg|woff(2)?|eot|ttf|svg)(\?[a-z0-9=\.]+)?$/,
                use: {loader:'url-loader',options:{limit:100000000}} ,
            },
            {
                test: /\.html$/, 
                use: ['raw-loader']
            },
            {  
                test: /vendor\/.+\.(jsx|js|ts)$/,
                use: 'imports?jQuery=jquery,$=jquery,this=>window'
            }   
        ]
    },
    plugins:[
        extractTextPlugin,
        commonPlugin,
        jqueryProviderPlugin,
        new webpack.HotModuleReplacementPlugin()
    ],
    resolve:{
        extensions:['.js' ,'.ts', '.scss', '.html', '.css']
    }
    
} 