import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import App from "../app/App";
import Register from "../pages/Register";
import Login from "../pages/Login";
import UserLayout from "../components/UserPages/UserLayout/UserLayout";
import DashBoard from "../components/UserPages/UserLayout/DashBoard/DashBoard";

const PagesRoutes = () => {
    return(
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="/admin" element={<UserLayout/>}>
                    <Route path="/admin/dashboard" element={<DashBoard/>}/>
                </Route>
            </Routes>
        </BrowserRouter>
    );
}

export default PagesRoutes;