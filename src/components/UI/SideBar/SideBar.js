import React from "react";
import styled from "styled-components";

const SideBar = (props) => {
    let attachedClasses = ["SideDraw", "Close"];
    if (props.open) {
        attachedClasses = ["SideDraw", "Open"];
    }
    return (
        <>
            <SideBarDiv>
                <div className={attachedClasses.join(" ")}>

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
  }

`;

export default SideBar;