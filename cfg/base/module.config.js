"use strict";

const dirVars = require("../params/dir-vars.config.js");
const command = require("../params/command.config.js");

const path = require("path");
const MiniCssExtractPlugin = require("mini-css-extract-plugin");

module.exports = {
    rules: [

        // css-loader to bootstrap
        {
            test: /\.css$/,
            include: /node_modules|bootstrap/,
            use: [
                {
                    loader: command.env == "dev"? "style-loader": MiniCssExtractPlugin.loader
                },
                {
                    loader: "css-loader",
                    options: {
                        modules: false,
                        sourceMap: true
                    }
                }
            ]
        },

        // css-loader
        {
            test: /\.css$/,
            exclude: /node_modules|bootstrap/,
            use: [
                {
                    loader: command.env == "dev"? "style-loader": MiniCssExtractPlugin.loader
                },
                {
                    loader: "css-loader",
                    options: {
                        modules: true,
                        localIdentName: "[path][name]__[local]--[hash:base64:6]",
                        autoprefixer: true,
                        minimize: true,
                        sourceMap: true
                    }
                },
                {
                    loader: "postcss-loader",
                    options: {
                        config: {
                            path: path.resolve(dirVars.cfgDir, "vendors/postcss.config.js")
                        },
                        sourceMap: true
                    }
                }
            ]
        },

        // scss-loader, 模块化样式
        {
            test: /\.scss$/,
            exclude: /node_modules|bootstrap|commons/,
            use: [
                {
                    loader: command.env == "dev"? "style-loader": MiniCssExtractPlugin.loader
                },
                {
                    loader: "css-loader",
                    options: {
                        modules: true,
                        localIdentName: "[path][name]__[local]--[hash:base64:6]",
                        autoprefixer: true,
                        minimize: true,
                        sourceMap: true
                    }
                },
                {
                    loader: "postcss-loader",
                    options: {
                        config: {
                            path: path.resolve(dirVars.cfgDir, "vendors/postcss.config.js")
                        },
                        parser: "postcss-scss",
                        sourceMap: true
                    }
                },
                {
                    loader: "resolve-url-loader"
                },
                {
                    loader: "sass-loader",
                    options: {
                        outputStyle: "expanded"
                    }
                }
            ]
        },

        // scss-loader, 通用样式, 为了通用性要独立配置, css-loader 不能设置模块化
        {
            test: /\.scss$/,
            include: /commons/,
            use: [
                {
                    loader: command.env == "dev"? "style-loader": MiniCssExtractPlugin.loader
                },
                {
                    loader: "css-loader",
                    options: {
                        autoprefixer: true,
                        minimize: true,
                        sourceMap: true
                    }
                },
                {
                    loader: "postcss-loader",
                    options: {
                        config: {
                            path: path.resolve(dirVars.cfgDir, "vendors/postcss.config.js")
                        },
                        parser: "postcss-scss",
                        sourceMap: true
                    }
                },
                {
                    loader: "sass-loader",
                    options: {
                        outputStyle: "expanded"
                    }
                }
            ]
        },

        // babel-loader
        {
            test: /\.(js|jsx)$/,
            exclude: /node_modules/,
            use: {
                loader: "babel-loader",
                options: {
                    cacheDirectory: true
                }
            }
        },

        // expose-loader
        {
            test: require.resolve('jquery'),
            use: 'expose?jQuery!expose?$'
        },

        // json-loader
        {
            test: /\.json$/,
            use: "json-loader"
        },

        // url-loader
        {
            /**
            * 图片加载器, 与file-loader类似, 但其更适合图片
            * 作用: 可以将较小的图片转成base64, 减少http请求
            * 如下配置, 将小于8192byte的图片转成base64码, 图片名称不区分大小写
            */
            test: /\.(png|jpe?g|gif)$/i,
            include: dirVars.srcDir,
            use: [
                {
                    loader: "url-loader",
                    options: {
                        // 8192 bit, 1024 byte, 1kB
                        limit: 8192,
                        name: "assets/img/[name].[ext]"
                    }
                }
                /*{
                    loader: "image-webpack-loader",
                    options: {
                        progressive: true,
                        optimizationLevel: 7,
                        interlaced: false,
                        pngquant: {
                            quality: "65-90",
                            speed: 4
                        }
                    }
                }*/
            ]
        },

        // null-loader
        {
            // 专供bootstrap方案使用的, 忽略bootstrap自带的字体文件, 采用 iconfont方案
            test: /\.(woff|woff2|svg|eot|ttf)$/,
            include: /glyphicons/,
            loader: "null-loader",
        },

        // file-loader
        {
            // 专供font-awesome方案使用
            test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
            include: /font-awesome/,
            use: [
                {   loader: "file-loader",
                    options: {
                        name: "assets/font/[name].[ext]"
                    }
                }
            ]
        },

        // url-loader
        {
            // 专供iconfont方案使用的, 后面会带一串时间戳, 需要特别匹配到
            test: /\.(woff|woff2|svg|eot|ttf)\??.*$/,
            include: dirVars.srcDir,
            use: [
                {   loader: "url-loader",
                    options: {
                        // 8192 bit, 1024 byte, 1kB
                        limit: 8192,
                        name: "assets/font/[name].[ext]"
                    }
                }
            ]
        },

        // file-loader
        {
            test: /\.(mp3|ogg)$/,
            loader: "file-loader",
            options: {
                name: "assets/music/[name].[ext]"
            }
        },

        // file-loader
        {
            test: /\.mp4$/,
            loader: "file-loader",
            options: {
                name: "assets/video/[name].[ext]"
            }
        }
    ]
};
