import React from "react";
import MenuItems from "./MenuItems/MenuItems";
import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";
import {Link as Links} from "react-scroll";
import {animateScroll as scroll} from "react-scroll";

const scrollToTop = () => {
    scroll.scrollToTop();
};

const TopBar = (props) => {
    return (
        <>
            <NavBar className="navbar navbar-expand-xl bg-light navbar-light sticky-top">
                <div className="container">
                    {/*<a className="navbar-brand pl-lg-5" href="#">یادینا</a>*/}
                    <Links
                        activeClass="active"
                        className="navbar-brand pl-lg-5"
                        onClick={() => scrollToTop()}
                        spy={true}
                        smooth={true}
                        offset={-70}
                        duration={500}
                    >
                        یادینا
                    </Links>
                    <div className="d-xl-none d-lg-block toggler-box shadow-sm" style={{cursor: 'pointer'}}
                         onClick={props.clicked}>
                        {props.open ? <CloseIcon style={{color: '#29509d'}} fontSize={"large"}/> :
                            <MenuIcon style={{color: '#29509d'}} fontSize={"large"}/>}
                    </div>
                    <div className="collapse navbar-collapse" id="collapsibleNavbar">
                        <ul className="navbar-nav">
                            <MenuItems/>
                        </ul>
                    </div>
                    <div className="btn-group d-xl-block d-lg-none d-none">
                        <Link to="/register" type="button" className="btn registerBTN">ثبت نام</Link>
                        <Link to="/login" type="button" className="btn loginBTN">ورود</Link>
                    </div>
                </div>
            </NavBar>
        </>
    );
}

const NavBar = styled.nav`
  background-color: #f9fafb !important;
  border-bottom: 4px solid white;
  z-index: 100;
  
  .navbar-brand {
    cursor: pointer;
  }
  
  .toggler-box {
    background-color: white;
    border-radius: 5px;
    padding: 3px 2px;
  }

  .navbar-brand {
    font-weight: 900;
    color: rgba(41, 80, 157);
    font-size: 35px;
  }

  .navbar-brand:hover {
    color: rgba(41, 80, 157);
  }

  .registerBTN {
    background-color: #29509d;
    color: white;
    border-radius: 0 6px 6px 0 !important;
    transition: all ease 0.5s;
  }

  .loginBTN {
    background-color: #5271af;
    color: white;
    border-radius: 6px 0 0 6px !important;
    transition: all ease 0.5s;
  }

  .registerBTN:hover, .loginBTN:hover {
    background-color: #7ac3f0;
    z-index: unset !important;
  }
`;

export default TopBar;