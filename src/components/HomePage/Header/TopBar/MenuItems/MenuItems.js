import React from "react";
import styled from "styled-components";

const items = [
    {title: "خانه", link: "#Home", id: 1},
    {title: "ویژگی ها", link: "#Features", id: 2},
    {title: "سوالات متداول", link: "#Questions", id: 3},
    {title: "نظرات کاربران", link: "#Comments", id: 4},
    {title: "درباره ما", link: "#AboutUs", id: 5},
]

const MenuItems = (props) => {
    return items.map((item) => {
        return (
            <ListItem key={item.id} className="nav-item px-lg-2">
                <a className="nav-link" onClick={props.clicked} href={item.link}>{item.title}</a>
            </ListItem>
        );
    });
}

const ListItem = styled.li`
  .nav-link {
    transition: all ease 0.7s;
    font-weight: 700;
  }

  .nav-link:hover {
    color: rgba(41, 80, 157) !important;
  }
`;

export default MenuItems;