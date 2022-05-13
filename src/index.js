import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import { AppContextProvider } from "store";
import App from "./App";

import GlobalStyle from "layouts/globalStyle";

ReactDOM.render(
    <AppContextProvider>
        <BrowserRouter>
            <GlobalStyle />
            <App />
        </BrowserRouter>
    </AppContextProvider>,
    document.getElementById("root")
);
