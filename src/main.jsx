import { ChakraProvider } from "@chakra-ui/react";
import React from "react";
import ReactDOM from "react-dom/client";
import { Provider } from "react-redux";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { Store } from "./Redux/Store";

ReactDOM.createRoot(document.getElementById("root")).render(
  <BrowserRouter>
    <ChakraProvider>
      <Provider store={Store}>
        <App />
      </Provider>
    </ChakraProvider>
  </BrowserRouter>
);
