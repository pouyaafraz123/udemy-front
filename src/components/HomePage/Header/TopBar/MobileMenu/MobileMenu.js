import React from "react";
import styled from "styled-components";
import MenuItems from "../MenuItems/MenuItems";
import { Link } from "react-router-dom";

const MobileMenu = (props) => {
    return (
        <MobileItems>
            <MenuItems clicked={props.clicked}/>
            <div className="d-flex flex-column pt-3">
                <Link to="/register" className="nav-link" onClick={props.clicked}>ثبت نام</Link>
                <Link to="/login" className="nav-link pt-0 mt-0" onClick={props.clicked}>ورود</Link>
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