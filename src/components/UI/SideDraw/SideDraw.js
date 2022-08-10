import React from "react";
import styled from "styled-components";
import MobileMenu from "../../HomePage/Header/TopBar/MobileMenu/MobileMenu";

const SideDraw = (props) => {
    let attachedClasses = ["SideDraw", "Close"];
    if (props.open) {
        attachedClasses = ["SideDraw", "Open"];
    }
    return (
        <>
            <SideDrawDiv>
                <div className={attachedClasses.join(" ")}>
                    <MobileMenu/>
                </div>
            </SideDrawDiv>
        </>
    );
}

const SideDrawDiv = styled.div`
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
  }

  .Open {
    transform: translateX(0);
  }

  .Close {
    transform: translateX(100%);
  }

  @media only screen and (min-width: 1200px) {
    .SideDraw {
      display: none;
    }
  }
`;

export default SideDraw;