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
                    {props.open ? <CloseIcon style={{color: '#29509d'}} fontSize={"large"}/> :
                        <MenuIcon style={{color: '#29509d'}} fontSize={"large"}/>}
                </div>
            </Greetingdiv>
        </>
    );
}

const Greetingdiv = styled.div`
  margin-bottom: 60px;
    small {
      font-size: 11px !important;
    }

  .toggler-box {
    background-color: white;
    border-radius: 5px;
    padding: 3px 2px;
  }
`;

export default Greeting;