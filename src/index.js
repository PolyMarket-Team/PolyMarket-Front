import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Reset } from "styled-reset";

import App from "./App";

ReactDOM.render(
    <BrowserRouter>
        <Reset />
        <App />
    </BrowserRouter>,
    document.getElementById("root")
);
