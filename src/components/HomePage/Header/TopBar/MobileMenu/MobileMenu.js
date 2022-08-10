import React from "react";
import styled from "styled-components";
import MenuItems from "../MenuItems/MenuItems";

const MobileMenu = (props) => {
    return (
        <MobileItems>
            <MenuItems/>
            <div className="d-flex flex-column pt-3">
                <a className="nav-link" href="#">ثبت نام</a>
                <a className="nav-link pt-0 mt-0" href="#">ورود</a>
            </div>
        </MobileItems>
    );
}

const MobileItems = styled.div`
  padding-top: 75px;
  display: flex;
  flex-direction: column;
  .nav-item {
    list-style: none;
  }
  .nav-link {
    color: white;
    font-weight: 400;
    transition: all ease 0.5s;
  }
  .nav-link:hover {
    color: white !important;
    padding-right: 30px;
  }
`;

export default MobileMenu;