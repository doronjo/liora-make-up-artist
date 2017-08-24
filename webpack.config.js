
var resolve = require('path').resolve;
var webpack = require('webpack');
var ExtractTextPlugin = require('extract-text-webpack-plugin');

var commonPlugin = new webpack.optimize.CommonsChunkPlugin({name:'commons',filename:'js/commons.js'});
var extractTextPlugin = new ExtractTextPlugin('css/style.css');
var jqueryProviderPlugin =  new webpack.ProvidePlugin({'window.jQuery':'jquery', '$': 'jquery','jquery': 'jquery','jQuery': 'jquery',});
var htmlWebpackAlterAssetPlugin = require('html-webpack-alter-asset-plugin');
var HtmlWebpackPlugin = require('html-webpack-plugin');
var CopyWebpackPlugin = require('copy-webpack-plugin');

module.exports = {
    context:resolve('src'),
    entry:{
        polyfills: './polyfills.ts' ,
        vendors:'./vendors.ts',
        main:"./main.ts" 
        
    },
    output:{
        path:resolve(__dirname,'build/'),
        publicPath:'/',
        filename:"js/[name].js"
    },
    devServer:{
        contentBase:__dirname + '/build',
        port:8080,
        host:'localhost',
        watchContentBase: true,
        stats:"errors-only",
        hot:true,
        open:true
    },
    watch:false,
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
                use: ['html-loader']
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
        new webpack.HotModuleReplacementPlugin(),
        new webpack.ContextReplacementPlugin(/angular(\\|\/)core(\\|\/)@angular/, resolve(__dirname, '../src')),
        new HtmlWebpackPlugin({title: 'Custom template',template: 'index.ejs' ,chunksSortMode :'dependency' ,
        injectAlter: {
                js: { 
                    keys: ['commons', 'vendor', 'polyfills', 'main' ] 
                }
         }}),
        new htmlWebpackAlterAssetPlugin(),
        new CopyWebpackPlugin([{from:'assets', to:'assets'}])
    ],
    resolve:{
        extensions:['.js' ,'.ts', '.scss', '.html', '.css']
    }
    
} 