"use strict";

const command = require("./command.config.js");

const path = require("path");

const dirVars = {};

/* global __dirname */

// output配置的publicPath参数值
// dirVars.publicPath = (command.env == "dev") ? "./" : "https://beyanjin.github.io/websites/";
// dirVars.publicPath = (command.env == "dev") ? "./" : "http://120.25.59.185:8081/pic/";
dirVars.publicPath = "./";

// 项目根目录
dirVars.rootDir = path.resolve(__dirname, "../../");

// node-modules 目录的路径
dirVars.nodeModulesDir = path.resolve(dirVars.rootDir, "node_modules/");
// cfg 目录的路径
dirVars.cfgDir = path.resolve(dirVars.rootDir, "cfg/");
// src 目录的路径
dirVars.srcDir = path.resolve(dirVars.rootDir, "src/");
// test 目录的路径
dirVars.testDir = path.resolve(dirVars.rootDir, "test/");
// dist 目录的路径
dirVars.distDir = path.resolve(dirVars.rootDir, "dist/");

module.exports = dirVars;