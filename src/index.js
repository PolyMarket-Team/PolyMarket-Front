import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import store from "@store/store";

import App from "./App";

import GlobalStyle from "layouts/globalStyle";

ReactDOM.render(
    <Provider store={store}>
        <BrowserRouter>
            <GlobalStyle />
            <App />
        </BrowserRouter>
    </Provider>,
    document.getElementById("root")
);
