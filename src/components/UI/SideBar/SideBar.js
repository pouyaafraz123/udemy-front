import React from "react";
import styled from "styled-components";
import CloseIcon from '@mui/icons-material/Close';
import SideBarItems from "../../UserPages/UserLayout/SideBarItems/SideBarItems";

const SideBar = (props) => {
    let attachedClasses = ["SideDraw", "Close"];
    if (props.open) {
        attachedClasses = ["SideDraw", "Open"];
    }
    return (
        <>
            <SideBarDiv>
                <div className={attachedClasses.join(" ")}>
                    <div className="Close-Icon" onClick={props.clicked}><CloseIcon /></div>
                    <h3 className="logo-brand text-center pt-2">یادینا</h3>
                    <SideBarItems clicked={props.clicked}/>
                </div>
            </SideBarDiv>
        </>
    );
}

const SideBarDiv = styled.div`
  .SideDraw {
    position: fixed;
    width: 320px;
    max-width: 70%;
    height: 100%;
    right: 0;
    top: 0;
    z-index: 200;
    background-color: #29509d;
    padding: 32px 16px;
    box-sizing: border-box;
    transition: transform ease-out 0.3s;
    border-radius: 35px 0 0 35px;
  }
  
  .logo-brand {
    cursor: pointer;
    font-weight: 900;
    color: white;
    font-size: 35px;
  }
  
  .Close-Icon {
    position: absolute;
    top: 15px;
    right: 15px;
    color: white;
    cursor: pointer;
    display: none;
  }
  
  .Close-Icon svg {
    font-size: 30px;
  }

  .Open {
    transform: translateX(0);
  }

  .Close {
    transform: translateX(100%);
  }

  @media only screen and (min-width: 1192px) {
    .SideDraw {
      display: block;
      transform: translateX(0);
    }
  }

  @media only screen and (max-width: 1191px) {
    .SideDraw {
      display: block;
      border-radius: 0 !important;
    }

    .Close-Icon {
      display: block;
    }
  }

`;

export default SideBar;