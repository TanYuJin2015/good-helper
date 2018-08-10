"use strict";

const path = require("path");
const dirVars = require("../params/dir-vars.config");

module.exports = {
    alias: {
        jquery: path.resolve(dirVars.nodeModulesDir, "jquery/dist/jquery.min.js"),

        bootstrap_css: path.resolve(dirVars.nodeModulesDir, "bootstrap/dist/css/bootstrap.min.css"),
        bootstrap_js: path.resolve(dirVars.nodeModulesDir, "bootstrap/dist/js/bootstrap.min.js"),

        font_awesome: path.resolve(dirVars.nodeModulesDir, "font-awesome/css/font-awesome.min.css"),

        "react": path.resolve(dirVars.nodeModulesDir, "react/index.js"),
        "react-dom": path.resolve(dirVars.nodeModulesDir, "react-dom/index.js")
    },
    extensions: [".js", ".jsx", ".json"]
};