"use strict";

/* global process */

const task = process.env.npm_lifecycle_event;


/**
* serve: true, false
         是否开启服务器调试, true 为 开启, false 为 打包
* env:  dev, prod
        模式, dev 为 开发模式, prod 为 生产环境
*/
let serve, env;

if (task == "devBuild") {
    env = "dev";
    serve = false;
} else if (task == "prodBuild") {
    env = "prod";
    serve = false;
} else if (task == "devBug") {
    env = "dev"
    serve = true; // 调试
} else if (task == "prodBug") {
    env = "prod"
    serve = true; // 调试
} else {
    // ToDo
}

module.exports= {
    "env": env,
    "serve": serve
};