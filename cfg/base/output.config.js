"use strict";

const dirVars = require("../params/dir-vars.config");
const command = require("../params/command.config.js");

module.exports = {
    path: dirVars.distDir,
    
     // [name]表示entry每一项中的key，用以批量指定生成后文件的名称
    filename: command.serve ? "[name]/index.js"
                            : "[name]/index.[contenthash:4].js",
                            
    chunkFilename: "[id].[contenthash].js",

    publicPath: command.serve ? "http://localhost:8000/"
                              : dirVars.publicPath
};