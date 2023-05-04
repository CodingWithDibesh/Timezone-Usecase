import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./page/index.tsx";
import User1 from "./page/User1/index.tsx";
import User2 from "./page/User2/index.tsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
    <React.StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/User1" element={<User1 />} />
                <Route path="/User2" element={<User2 />} />
            </Routes>
        </BrowserRouter>
    </React.StrictMode>
);
