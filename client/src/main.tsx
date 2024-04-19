import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { ChakraProvider } from "@chakra-ui/react";
import { Provider } from "react-redux";
import store from "./store/store.ts";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./Routes/Dashboard.tsx";
import Search from "./Routes/Search.tsx";
import Leaderboard from "./Routes/Leaderboard.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <BrowserRouter>
      <ChakraProvider>
        <Provider store={store}>
          <Routes>
            <Route path="/" element={<App />} />
            <Route path="/login" element={<App />} />
            <Route path="/dashboard" element={<Dashboard />} />
            <Route path="/search" element={<Search />} />
            <Route path="/leaderboard" element={<Leaderboard />} />
          </Routes>
        </Provider>
      </ChakraProvider>
    </BrowserRouter>
  </React.StrictMode>
);
