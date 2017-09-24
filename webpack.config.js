var entryConfig = {
    htmlConfig:'/src/index.tmpl.html',
    jsConfig:'/src/main.js'
}
var buildConfig = {
    htmlBuild:'/build',
    commonbuild:'/build',
    jsBuild:'main.js'
}

var  webpack = require('webpack');
var  HtmlWebpackPlugin = require('html-webpack-plugin');
module.exports = {
    devtool: 'eval-source-map',
    entry:  __dirname + entryConfig.jsConfig,       //已多次提及的唯一入口文件
    output: {
        path: __dirname + buildConfig.commonbuild,  //打包后的文件存放的地方
        filename:buildConfig.jsBuild                //打包后输出文件的文件名
    },
    devServer: {
        contentBase: './index.html',         //本地服务器所加载的页面所在的目录
        historyApiFallback: true,                   //不跳转
        inline: true                                //实时刷新
    },
    module: {
        rules: [
            {
                test: /(\.jsx|\.js)$/,
                use: {
                    loader: "babel-loader"
                },
                exclude: /node_modules/
            },
            {
                test: /\.css$/,
                use: [
                    {
                        loader: "style-loader"
                    }, {
                        loader: "css-loader"
                    }, {
                        loader: "postcss-loader"
                    }
                ]
            }
        ]
    },
    plugins: [
        new webpack.BannerPlugin('版权所有，翻版必究'),
        new HtmlWebpackPlugin({
            template:__dirname + entryConfig.htmlConfig//new 一个这个插件的实例，并传入相关的参数
        })
    ],
}

