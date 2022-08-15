import React from "react";
import styled from "styled-components";

const Alert = (props) => {
    return (
        <>
            <div className="container-fluid" style={{display: props.display ? "block" : "none"}}>
                <AlertDiv className="alert" backColor={props.backColor} borderColor={props.borderColor}>
                    <h6>{props.title}</h6>
                    <p>{props.content}</p>
                </AlertDiv>
            </div>
        </>
    );
}

const AlertDiv = styled.div`
  background-color: ${props => props.backColor};
  color: white;
  border-right: 8px solid ${props => props.borderColor};
  width: 400px;
  position: fixed;
  bottom: 30px;
  right: 30px;

  &:before {
    content: '';
    height: 2px;
    width: 85%;
    background-color: white;
    display: block;
    position: absolute;
    top: 85%;
    margin: 0 auto;
    border-radius: 10px;
    animation-name: timer;
    animation-duration: 3s;
    animation-timing-function: linear;
    animation-iteration-count: 1;
    width: 0;
    //bottom: 10%;
  }

  @media only screen and (max-width: 600px) {
    width: 90%;
    right: 5%;
  }

  @keyframes timer {
    from {
      width: 85%;
    }
    to {
      width: 0;
    }
  }
`;

export default Alert;