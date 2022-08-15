import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import LoginSvg from "../../../assets/images/login.svg";
import SignUpSvg from "../../../assets/images/Signin.svg"


const Side = (props) => {
    console.log(props.image)
    return (
        <SideDiv>
            <div className="Side">
                <Link to={"/"} className="">
                    یادینا
                </Link>
                <div className="Img-Container d-flex justify-content-center align-items-center mt-n5">
                    <img src={props.login ? LoginSvg : SignUpSvg} alt="login"
                         className="img-fluid align-self-center align-content-center"/>
                </div>
            </div>
        </SideDiv>
    );
}

const SideDiv = styled.div`
  .Side {
    position: fixed;
    width: 30%;
    max-width: 70%;
    height: 100%;
    right: 0;
    top: 0;
    z-index: 200;
    background-color: #29509d;
    padding: 20px 30px;
    box-sizing: border-box;
    border-radius: 35px 0 0 35px;
  }

  a {
    color: white;
    text-decoration: none;
    font-weight: 900;
    font-size: 36px;
  }

  .Img-Container {
    height: 100%;
    padding: 0 35px;

  }

  @media only screen and (max-width: 1525px) {
    .Side {
      display: none;
    }
  }
`;

export default Side;