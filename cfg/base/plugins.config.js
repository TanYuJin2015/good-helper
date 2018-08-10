"use strict";

const command = require("../params/command.config.js");
const dirVars = require("../params/dir-vars.config.js");
// const dllConfig = require("../../dll.json");

const path = require("path");
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

const pluginsConfig = [
    // 使jquery暴露到全局
    new webpack.ProvidePlugin({
        $: "jquery",
        jQuery: "jquery",
        "window.jQuery": "jquery",
        "window.$": "jquery",
        Popper: ['popper.js', 'default']
    }),
    /**
    * 把css抽取出来单独打包到css文件中, 并通过link标签导入到html中
    */
    new MiniCssExtractPlugin({
        filename: command.env == "dev"? '[name].css': '[name].[contenthash].css',
        chunkFilename: command.env == "dev"? '[id].css': '[id].[contenthash].css',
    }),
    new webpack.DefinePlugin({
        "process.env": {
            NODE_ENV: (command.env == "prod")? '"production"': '"development"'
        }
    }),
    // new webpack.DllReferencePlugin({
    //     context: dirVars.rootDir,
    //     manifest: require("../../manifest.json")
    // }),

    // index modules
    new HtmlWebpackPlugin({
        filename: "index.html",
        template: "./src/index.html",
        favicon: path.resolve(dirVars.srcDir, "./favicon.png"),
        // dll.json
        // dllConfig: dllConfig,
        // 导入到body
        inject: true,
        // 需要依赖的模块
        chunks: ["index"],
        // xhtml
        xhtml: true,
        // 根据依赖自动排序
        chunksSortMode: "dependency",
        minify: {
            "collapseWhitespace": (command.env == "prod"),
            "removeAttributeQuotes": (command.env == "prod"),
            "removeEmptyAttributes": (command.env == "prod"),
            "removeComments": (command.env == "prod")
        }
    })
];


if (command.serve) {
    // 开启服务器
    pluginsConfig.push(new webpack.HotModuleReplacementPlugin());
} else {
    // 每次打包都先删除dist目录的所有模块（除dll外）
    pluginsConfig.push(
        new CleanWebpackPlugin(["index*", "assets"], {
            root: dirVars.distDir,
            verbose: true,
            dry: false
        })
    );
}

// 生产环境
if (command.env == "prod") {
    /**
    * no-emit-on-errors-plugin
    * 配合CLI的--bail, 一出error就终止webpack的编译进程
    */
    pluginsConfig.push(new webpack.NoEmitOnErrorsPlugin());
}

module.exports = pluginsConfig;