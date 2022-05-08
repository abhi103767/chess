import React from "react";
import "./index.css";
import App from "./App";
import { createRoot } from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import { Provider as ReactProvider } from "react-redux";
import { store } from "./Redux/store";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
   
    <BrowserRouter> 
     <ReactProvider store={store}>
     <App />
     </ReactProvider>
    </BrowserRouter>
   
);
 