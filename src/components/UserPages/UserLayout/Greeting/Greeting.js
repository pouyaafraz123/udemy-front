import React from "react";
import styled from "styled-components";

const Greeting = (props) => {
    return (
        <>
            <Greetingdiv className="d-flex align-items-center">
                <img src={require("../../../../assets/images/User.png")} alt="logo" style={{width: '40px'}}
                     className="img-fluid"/>
                <div className="d-flex flex-column justify-content-center pr-2">
                    <p>Kamyab Pouya Tabani Afraz <small className="text-muted">خوش آمدید!</small> </p>
                    <small className="text-muted mt-n3">tabaniafraz@telegmail.com</small>
                </div>
            </Greetingdiv>
        </>
    );
}

const Greetingdiv = styled.div`
    small {
      font-size: 11px !important;
    }
`;

export default Greeting;