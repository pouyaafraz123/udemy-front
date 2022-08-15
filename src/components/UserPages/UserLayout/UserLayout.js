import React, {useState} from "react";
import styled from "styled-components";
import SideBar from "../../UI/SideBar/SideBar";
import Greeting from "./Greeting/Greeting";
import GlobalStyle from "../../../containers/Global/GlobalStyle";
import {Navigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {authState} from "../../../features/AuthSlice";

const UserLayout = (props) => {
    const [open, setOpen] = useState(false);
    const isSignedIn = useSelector(authState).isSignedIn;

    if (!isSignedIn) return <Navigate to="/login" replace={true}/>

    const sideDrawHandler = () => {
        setOpen(!open)
    }
    return (
        <>
            <GlobalStyle color={"#f3f4f6"}/>
            <SideBar activeItem={props.activeItem} open={open} clicked={() => sideDrawHandler()}/>
            <UserLayoutDiv>
                <div className="container-fluid mt-5 pt-3 pl-lg-5 pl-md-5 pl-3 mx-auto">
                    <Greeting clicked={() => sideDrawHandler()}/>
                    {props.inside}
                </div>
            </UserLayoutDiv>
        </>
    );

}

const UserLayoutDiv = styled.div`
  margin-right: 360px;
  @media only screen and (max-width: 1191px) {
    margin-right: 36px;
  }
  @media only screen and (max-width: 768px) {
    margin-right: 0;
  }

  /*margin-right: 400px;
  margin-left: 34px;
  @media only screen and (max-width: 1191px) {
    margin-right: 70px;
    margin-left: 54px;
  }
  @media only screen and (max-width: 576px) {
    margin-right: 40px;
    margin-left: 24px;
  }*/
`;

export default UserLayout;