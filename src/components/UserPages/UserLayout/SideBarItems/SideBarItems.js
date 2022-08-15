import React, {useState} from "react";
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
import {useDispatch} from "react-redux";
import {signOut} from "../../../../features/AuthSlice";

const SideBarItems = (props) => {
    const [items, setItems] = useState([
        {
            url: "/admin/dashboard",
            title: "داشبورد",
            icon: <DashboardIcon/>,
            status: props.activeItem === "dashboard" ? "active" : "",
            id: 1
        },
        {
            url: "/admin/profile",
            title: "پروفایل من",
            icon: <ManageAccountsIcon/>,
            status: props.activeItem === "profile" ? "active" : "",
            id: 2
        },
        {
            url: "/admin/playlist",
            title: "لیست پخش ها",
            icon: <PlaylistPlayIcon/>,
            status: props.activeItem === "playlist" ? "active" : "",
            id: 3
        },
        {
            url: "/admin/channel",
            title: "لیست کانال ها",
            icon: <YouTubeIcon/>,
            status: props.activeItem === "channel" ? "active" : "",
            id: 4
        },
        {
            url: "/admin/userManagement",
            title: "مدیریت کاربران",
            icon: <PeopleIcon/>,
            status: props.activeItem === "userManagement" ? "active" : "",
            id: 5
        },
        {
            url: "/admin/roleManagement",
            title: "مدیریت نقش ها",
            icon: <PeopleIcon/>,
            status: props.activeItem === "roleManagement" ? "active" : "",
            id: 6
        },
        {
            url: "/admin/universityManagement",
            title: "مدیریت دانشگاه ها",
            icon: <AccountBalanceIcon/>,
            status: props.activeItem === "universityManagement" ? "active" : "",
            id: 7
        },
        {
            url: "/admin/commentManagement",
            title: "مدیریت نظرات",
            icon: <ChatBubbleIcon/>,
            status: props.activeItem === "commentManagement" ? "active" : "",
            id: 8
        },/*
            {url: "/login", title: "خروج", icon: <LogoutIcon/>},*/
    ]);


    const changeStatus = (id) => {
        const currentItemIndex = items.findIndex((p) => {
            return p.id === id
        });
        const currentItem = items[currentItemIndex];
        const menuItems = items;
        currentItem.status = "active";
        menuItems[currentItemIndex] = currentItem;

        menuItems.forEach(item => {
            if (item.id !== id) {
                item.status = "";
            }
        })
        setItems(menuItems);
    }

    const dispatch = useDispatch();
    return (
        <>
            {
                items.map((item) => {
                    return (
                        <ItemsDiv key={item.title} onClick={props.clicked}>
                            <Link to={item.url} className={item.status} onClick={() => changeStatus(item.id)}>
                                {item.icon} {item.title}
                            </Link>
                        </ItemsDiv>
                    );
                })
            }
            <ItemsDiv>
                <Link to={"/login"} onClick={() => dispatch(signOut())}>
                    <LogoutIcon/> خروج
                </Link>
            </ItemsDiv>
        </>
        );

}

const ItemsDiv = styled.div`
  margin-top: 35px;
  margin-right: 30px;

  a {
    color: rgba(256, 256, 256, 0.7);
    text-decoration: none;
    transition: all ease 0.3s;
  }

  a:hover:not(a.active) {
    padding-right: 10px;
    color: rgba(256, 256, 256, 1);
  }

  a.active {
    color: rgba(256, 256, 256, 1);
  }

  svg {
    font-size: 28px;
  }
`;

export default SideBarItems;