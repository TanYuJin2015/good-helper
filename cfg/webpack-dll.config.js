"use strict";

const dirVars = require("./params/dir-vars.config.js");

const webpack = require("webpack");
const AssetsPlugin = require("assets-webpack-plugin");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");
const CleanWebpackPlugin = require("clean-webpack-plugin");

module.exports = {
    
    cache: true,

    stats: {
        // 增加资源信息
        assets: true,
        // 对资源按指定的项进行排序
        assetsSort: "field",
        // 增加缓存了的（但没构建）模块的信息
        cached: true,
        // 等同于 `webpack --colors` 
        colors: true,
        // 增加错误信息
        errors: true,
        // 增加错误的详细信息（就像解析日志一样）
        errorDetails: true,
        // 增加编译的哈希值
        hash: true,
        // 增加内置的模块信息
        modules: true,
        // 对模块按指定的项进行排序
        modulesSort: "field",
        // 增加 publicPath 的信息
        publicPath: true,
        // 增加模块被引入的原因
        reasons: true,
        // 增加模块的源码
        source: true,
        // 增加时间信息
        timings: true,
        // 增加 webpack 版本信息
        version: true,
        // 增加提示
        warnings: true
    },

    // 入口文件
    entry: {
        dll: [
            // polyfills
            "./src/common/dll/polyfills.js",
            //框架和库
            "./src/common/dll/vendors.js"
        ]
    },

    // 输出文件
    output: {
        path: dirVars.srcDir,
        filename: "common/dll/[name].js",
        library: "[name]"
    },

    // 插件
    plugins: [
        new webpack.DllPlugin({
            context: dirVars.rootDir,
            path: "manifest.json",
            name: "[name]"
        }),
        // 使jquery暴露到全局
        new webpack.ProvidePlugin({
            $: "jquery",
            jQuery: "jquery",
            "window.jQuery": "jquery",
            "window.$": "jquery",
        }),
        new MiniCssExtractPlugin({
            filename: "common/dll/[name].css",
            // 向所有额外的 chunk 提取 (默认只提取初始加载模块)
            allChunks: true
        }),
        new webpack.LoaderOptionsPlugin({
            options: {
                postcss: require("./vendors/postcss.config.js")
            }
        }),
        // 压缩输出的 js 文件
        new AssetsPlugin({
            filename: "dll.json",
            path: dirVars.rootDir
        })
    ],

    // 模块
    module: require("./base/module.config.js"),

    externals: require("./base/externals.config.js"),

    resolve: require("./base/resolve.config.js")
};