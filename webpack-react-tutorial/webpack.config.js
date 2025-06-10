const HtmlWebpackPlugin = require('html-webpack-plugin');
const path=require("path")
module.exports = {
    entry: "./app/index.js",
    module: {
        rules: [
            {
                test: /\.css$/i,
                use: ["style-loader", "css-loader"],
            },
            {
                test: /\.svg$/,
                loader: 'svg-inline-loader'
            },
            {
                test: /\.(js|jsx)$/,
                use: "babel-loader"
            }
        ]
    },
    output:{
        path:path.resolve(__dirname,"dist"),
        filename:"bundle.js",
    },
    plugins: [new HtmlWebpackPlugin({
        template:"./public/index.html"
    })],
    mode:process.env.NODE_ENV==="production"?"production":"development",
    devServer:{
        static:{
            directory:path.join(__dirname,'public')
        },
        port:3000,
        hot:true,
        open:true,
        compress:true
    }
}