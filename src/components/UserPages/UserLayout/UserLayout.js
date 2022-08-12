import React from "react";
import styled from "styled-components";
import SideBar from "../../UI/SideBar/SideBar";
import Greeting from "./Greeting/Greeting";
import GlobalStyle from "../../../containers/Global/GlobalStyle";
import DashBoard from "./DashBoard/DashBoard";

const UserLayout = (props) => {
    return(
        <>
            <GlobalStyle color={"#f3f4f6"} />
            <SideBar open={true}/>
            <UserLayoutDiv>
                <div className="container mt-5 pt-3 pl-5">
                    <Greeting />
                    <DashBoard />
                </div>
            </UserLayoutDiv>
        </>
    );
}

const UserLayoutDiv = styled.div`
    margin-right: 400px;
`;

export default UserLayout;