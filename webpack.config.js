module.exports = 
{
    entry:["./utils.js" , "./app.js"],
    output:{
        filename:"bundle.js"
    },
    watch:true,
     
    module:{
        rules:[
            {
                test:/\.js$/,
                enforce:"pre",
                exclude:/node_module/,
                loader:'jshint-loader'
            },
            {
                test:/\.es6$/,
                exclude:/node_module/,
                use:[{loader:'babel-loader'}]
            }
        ]
    },

    resolve:{
        extensions:['.js' ,'.es6']
    }
    
} 