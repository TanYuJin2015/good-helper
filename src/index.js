// Bootstrap CSS
import "bootstrap_css";
// FontAwesome
import "font_awesome";
// Base CSS
import "./commons/styles/base.scss";
import "./commons/styles/layout.scss";

// Jquery
import "jquery";
// Bootstrap JS
import "bootstrap_js";
// React
import React from "react";
import { render } from "react-dom";

// components
import Routes from "./Routes.jsx";

render(
    <Routes />,
    document.getElementById("app-root")
);
