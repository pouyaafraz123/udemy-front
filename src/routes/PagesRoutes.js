import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import PlaylistPage from "../components/UserPages/Playlist/PlaylistPage";
import Home from "../pages/Home";

const PagesRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="/register" element={<Register/>}/>
                <Route path="/login" element={<Login/>}/>
                <Route path="/admin/playlist" element={<PlaylistPage/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default PagesRoutes;