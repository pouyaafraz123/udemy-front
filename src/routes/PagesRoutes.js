import React from "react";
import {BrowserRouter, Navigate, Route, Routes} from "react-router-dom";
import Home from "../pages/Home";
import Register from "../pages/Register";
import Login from "../pages/Login";
import UserLayout from "../components/UserPages/UserLayout/UserLayout";
import DashBoard from "../components/UserPages/UserLayout/DashBoard/DashBoard";
import Profile from "../components/UserPages/UserLayout/Profile/Profile";
import ChannelPage from "../components/UserPages/UserLayout/Channels/ChannelPage";
import UserManagementPage from "../components/UserPages/UserLayout/UserManagement/UserManagementPage";
import RoleManagement from "../components/UserPages/UserLayout/RoleManagement/RoleManagement";
import UniversityManagement from "../components/UserPages/UserLayout/UniversityManagement/UniversityManagementPage";
import CommentManagementPage from "../components/UserPages/UserLayout/Comment/CommentManagementPage";
import PlaylistComponent from "../components/UserPages/UserLayout/Playlist/PlaylistComponent";
import Playlist from "../components/UserPages/UserLayout/Playlist/Playlist";

const PagesRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home/>}/>
                <Route path="register" element={<Register/>}/>
                <Route path="login" element={<Login/>}/>
                <Route path="admin" element={<UserLayout inside={""}/>}/>
                <Route path="admin/dashboard" element={<UserLayout activeItem={"dashboard"} inside={<DashBoard/>}/>}/>
                <Route path="admin/profile" element={<UserLayout activeItem={"profile"} inside={<Profile/>}/>}/>
                <Route path="admin/playlist" element={<UserLayout activeItem={"playlist"} inside={<Playlist/>}/>}/>
                <Route path="admin/channel" element={<UserLayout activeItem={"channel"} inside={<ChannelPage/>}/>}/>
                <Route
                    path="admin/userManagement"
                    element={
                        <UserLayout
                            activeItem={"userManagement"}
                            inside={<UserManagementPage/>}
                        />
                    }
                />
                <Route
                    path="admin/roleManagement"
                    element={
                        <UserLayout
                            activeItem={"roleManagement"}
                            inside={<RoleManagement/>}
                        />
                    }
                />
                <Route
                    path="admin/universityManagement"
                    element={
                        <UserLayout
                            activeItem={"universityManagement"}
                            inside={<UniversityManagement/>}
                        />
                    }
                />
                <Route
                    path="admin/commentManagement"
                    element={
                        <UserLayout
                            activeItem={"commentManagement"}
                            inside={<CommentManagementPage/>}
                        />
                    }/>
                <Route
                    path="admin/playlist/:id"
                    element={<PlaylistComponent/>}/>
                <Route
                    path="*"
                    element={<Navigate to="/" replace={true}/>}/>
            </Routes>
        </BrowserRouter>
    );
}

export default PagesRoutes;