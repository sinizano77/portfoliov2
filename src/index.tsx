import React from "react";
import ReactDOM from "react-dom/client";

import "normalize.css";

import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { StyleSheetManager } from "styled-components";
import rootShouldForwardProp from "@mui/material/styles/rootShouldForwardProp";

/**Came with create-react-app - need to look into this later **/
const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);
root.render(
  <React.StrictMode>
    <StyleSheetManager
      shouldForwardProp={rootShouldForwardProp}
      enableVendorPrefixes
    >
      <App />
    </StyleSheetManager>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
