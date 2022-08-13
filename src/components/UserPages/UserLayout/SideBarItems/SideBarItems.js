import React, {Component} from "react";
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

class SideBarItems extends Component {
    state = {
        items: [
            {
                url: "/admin/dashboard",
                title: "داشبورد",
                icon: <DashboardIcon/>,
                status: this.props.activeItem === "dashboard" ? "active" : "",
                id: 1
            },
            {
                url: "/admin/profile",
                title: "پروفایل من",
                icon: <ManageAccountsIcon/>,
                status: this.props.activeItem === "profile" ? "active" : "",
                id: 2
            },
            {
                url: "/admin/playlist",
                title: "لیست پخش ها",
                icon: <PlaylistPlayIcon/>,
                status: this.props.activeItem === "playlist" ? "active" : "",
                id: 3
            },
            {
                url: "/admin/channel",
                title: "لیست کانال ها",
                icon: <YouTubeIcon/>,
                status: this.props.activeItem === "channel" ? "active" : "",
                id: 4
            },
            {
                url: "/admin/userManagement",
                title: "مدیریت کاربران",
                icon: <PeopleIcon/>,
                status: this.props.activeItem === "userManagement" ? "active" : "",
                id: 5
            },
            {
                url: "/admin/roleManagement",
                title: "مدیریت نقش ها",
                icon: <PeopleIcon/>,
                status: this.props.activeItem === "roleManagement" ? "active" : "",
                id: 6
            },
            {
                url: "/admin/universityManagement",
                title: "مدیریت دانشگاه ها",
                icon: <AccountBalanceIcon/>,
                status: this.props.activeItem === "universityManagement" ? "active" : "",
                id: 7
            },
            {
                url: "/admin/commentManagement",
                title: "مدیریت نظرات",
                icon: <ChatBubbleIcon/>,
                status: this.props.activeItem === "commentManagement" ? "active" : "",
                id: 8
            },
            {url: "/login", title: "خروج", icon: <LogoutIcon/>},
        ]
    }

    changeStatus(id) {
        const currentItemIndex = this.state.items.findIndex((p) => {
            return p.id === id
        });
        const currentItem = this.state.items[currentItemIndex];
        const menuItems = this.state.items;
        currentItem.status = "active";
        menuItems[currentItemIndex] = currentItem;

        menuItems.forEach(item => {
            if (item.id !== id) {
                item.status = "";
            }
        })
        this.setState({items: menuItems});
    }

    render() {
        return (
            <>
                {
                    this.state.items.map((item) => {
                        return (
                            <ItemsDiv key={item.title} onClick={this.props.clicked}>
                                <Link to={item.url} className={item.status} onClick={() => this.changeStatus(item.id)}>
                                    {item.icon} {item.title}
                                </Link>
                            </ItemsDiv>
                        );
                    })
                }
            </>
        );
    }
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