import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import DashboardIcon from '@mui/icons-material/Dashboard';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';
import PlaylistPlayIcon from '@mui/icons-material/PlaylistPlay';
import YouTubeIcon from '@mui/icons-material/YouTube';
import PeopleIcon from '@mui/icons-material/People';
import AccountBalanceIcon from '@mui/icons-material/AccountBalance';
import ChatBubbleIcon from '@mui/icons-material/ChatBubble';
import LogoutIcon from '@mui/icons-material/Logout';

const items = [
    {url: "/admin/dashboard", title: "داشبورد", icon: <DashboardIcon/>},
    {url: "/admin/profile", title: "پروفایل من", icon: <ManageAccountsIcon/>},
    {url: "/admin/playlist", title: "لیست پخش ها", icon: <PlaylistPlayIcon/>},
    {url: "/admin/channel", title: "لیست کانال ها", icon: <YouTubeIcon/>},
    {url: "/admin/userManagement", title: "مدیریت کاربران", icon: <PeopleIcon/>},
    {url: "/admin/role", title: "مدیریت نقش ها", icon: <PeopleIcon/>},
    {url: "/admin/universityManagement", title: "مدیریت دانشگاه ها", icon: <AccountBalanceIcon/>},
    {url: "/admin/comment", title: "مدیریت نظرات", icon: <ChatBubbleIcon/>},
    {url: "/login", title: "خروج", icon: <LogoutIcon/>},
]

const SideBarItems = (props) => {
    return (
        items.map((item) => {
            return (
                <ItemsDiv key={item.title} onClick={props.clicked}>
                    <Link to={item.url}>
                        {item.icon} {item.title}
                    </Link>
                </ItemsDiv>
            );
        })
    );
}

const ItemsDiv = styled.div`
  margin-top: 35px;
  margin-right: 30px;

  a {
    color: white;
    text-decoration: none;
  }
  
  svg {
    font-size: 28px;
  }
`;

export default SideBarItems;