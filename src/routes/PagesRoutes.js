import React from "react";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Register from "../pages/Register";
import Login from "../pages/Login";
import UserLayout from "../components/UserPages/UserLayout/UserLayout";
import DashBoard from "../components/UserPages/UserLayout/DashBoard/DashBoard";
import Home from "../pages/Home";
import PlaylistPage from "../components/UserPages/UserLayout/Playlist/PlaylistPage";
import ChannelPage from "../components/UserPages/UserLayout/Channels/ChannelPage";
import UserManagementPage from "../components/UserPages/UserLayout/UserManagement/UserManagementPage";
import UniversityManagement from "../components/UserPages/UserLayout/UniversityManagement/UniversityManagementPage";

const PagesRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="admin" element={<UserLayout inside={""}/>}/>
                <Route path="admin/dashboard" element={<UserLayout inside={<DashBoard/>}/>}/>
                <Route path="admin/playlist" element={<UserLayout inside={<PlaylistPage/>}/>}/>
                <Route path="admin/channel" element={<UserLayout inside={<ChannelPage/>}/>}/>
                <Route path="admin/userManagement" element={<UserLayout inside={<UserManagementPage/>}/>}/>
                <Route path="admin/universityManagement" element={<UserLayout inside={<UniversityManagement/>}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default PagesRoutes;