import React from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";

const Greeting = (props) => {
    return (
        <>
            <Greetingdiv className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img src={require("../../../../assets/images/User.png")} alt="logo" style={{width: '40px'}}
                         className="img-fluid"/>
                    <div className="d-flex flex-column justify-content-center pr-2">
                        <p>Kamyab Pouya Tabani Afraz <small className="text-muted">خوش آمدید!</small></p>
                        <small className="text-muted mt-n3">tabaniafraz@telegmail.com</small>
                    </div>
                </div>
                <div className="d-xl-none d-lg-block toggler-box shadow-sm" style={{cursor: 'pointer'}}
                     onClick={props.clicked}>
                    {props.open ? <CloseIcon fontSize={"large"}/> :
                        <MenuIcon fontSize={"large"}/>}
                </div>
            </Greetingdiv>
        </>
    );
}

const Greetingdiv = styled.div`
  margin-bottom: 60px;
  @media only screen and (max-width: 576px){
   
  }
    small {
      font-size: 11px !important;
    }

  .toggler-box {
    margin-left: 23px;
    background-color: white;
    border-radius: 5px;
    padding: 3px 2px;
    color: rgba(122,195,240,1);
    transition: all ease 0.5s;
  }
  
  .toggler-box:hover {
    color: #29509d;
  }
`;

export default Greeting;