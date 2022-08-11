import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../app/App";
import Register from "../pages/Register";
import Login from "../pages/Login";

const PagesRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="login" element={<Login/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default PagesRoutes;