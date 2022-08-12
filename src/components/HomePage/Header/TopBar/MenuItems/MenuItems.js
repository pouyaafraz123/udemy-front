import React from "react";
import styled from "styled-components";
import {Link} from "react-scroll";

const items = [
    {title: "خانه", link: "Home", id: 1},
    {title: "ویژگی ها", link: "Features", id: 2},
    {title: "سوالات متداول", link: "Questions", id: 3},
    {title: "نظرات کاربران", link: "Comments", id: 4},
    {title: "درباره ما", link: "AboutUs", id: 5},
]

const MenuItems = (props) => {
    return items.map((item) => {
        return (
            <ListItem key={item.id} className="nav-item px-lg-2">
                <Link
                    activeClass="active text-decoration-none"
                    className="nav-link"
                    onClick={props.clicked}
                    to={item.link}
                    spy={true}
                    smooth={true}
                    offset={-70}
                    duration={500}
                >
                    {item.title}
                </Link>
            </ListItem>
        );
    });
}

const ListItem = styled.li`
  .nav-link {
    transition: all ease 0.7s;
    font-weight: 700;
    cursor: pointer;
  }

  .nav-link:hover , a.active {
    color: rgba(41, 80, 157) !important;
  }
`;

export default MenuItems;