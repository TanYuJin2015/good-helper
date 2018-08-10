"use strict";

const command = require("./params/command.config.js");

module.exports = (env, argv) => {

    return {
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

        bail: true,

        devtool: (argv.mode == "development") ?
            "cheap-module-eval-source-map" :
            "cheap-module-source-map",

        // 入口文件
        entry: require("./base/entry.config.js"),

        // 输出文件
        output: require("./base/output.config.js"),

        // 插件
        plugins: require("./base/plugins.config.js"),

        // 模块
        module: require("./base/module.config.js"),

        externals: require("./base/externals.config.js"),

        resolve: require("./base/resolve.config.js"),

        devServer: command.serve ? require("./vendors/devServer.config.js") : {}
    }
};