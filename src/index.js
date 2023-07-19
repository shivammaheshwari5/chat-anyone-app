import { createRoot } from "react-dom/client";

import App from "./App";
import React from "react";
import "./index.css";

import { ChakraProvider } from "@chakra-ui/react";
import { BrowserRouter } from "react-router-dom";
import ChatProvider from "./components/context/chatProvider";
// import axios from "axios";
// import Cookies from "js-cookie";

// axios.interceptors.request.use((request) => {
//   request.headers.Authorization = `Bearer ${Cookies.get("token")}`;
//   return request;
// });
// axios.interceptors.response.use((response) => {
//   response.headers.Authorization = `Bearer ${Cookies.get("token")}`;
//   return response;
// });

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <BrowserRouter>
    <ChatProvider>
      <ChakraProvider>
        <App />
      </ChakraProvider>
    </ChatProvider>
  </BrowserRouter>
);
