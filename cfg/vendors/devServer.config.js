"use strict";

const dirVars = require("../params/dir-vars.config");

module.exports = {
    contentBase: dirVars.distDir,
    historyApiFallback: true,
    watchContentBase: false,
    // 主机名默认为 localhost
    host: "localhost",
    compress: true,
    // 可以监控js变化
    inline: true,
    // 默认8000
    port: 8000,
    open: true,
    // 热启动
    hot: true
};