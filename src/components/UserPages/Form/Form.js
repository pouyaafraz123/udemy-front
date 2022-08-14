import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import GlobalStyle from "../../../containers/Global/GlobalStyle";

const Form = (props) => {

    return (
        <RegisterDiv className="container pt-5 mt-4">
            <GlobalStyle color={"#f9fafb"}/>
            <div className="d-flex justify-content-center align-items-center">
                <div className="Form-Container w-100">
                    <h4 className="px-3 mb-4 pb-1 align-self-start">{props.title}</h4>
                    {props.children}
                    {renderLogin(props.login)}
                    <p className="px-3 mt-4">
                        {props.text}
                        <Link to={props.login ? "/register" : "/login"}
                              className="align-self-start text-decoration-none">
                            {props.linkText2}
                        </Link>
                        {props.text2}
                    </p>
                </div>
            </div>
        </RegisterDiv>

    );
}

const renderLogin = (login) => {
    return login ? <p className="px-3 mt-4">اگر رمز عبور خود را فراموش کرده اید <Link to="/forgotPassword"
                                                                                      className="align-self-start text-decoration-none">کلیک </Link>
                                            کنید
    </p> : "";
}

const RegisterDiv = styled.div`
  h4 {
    color: rgba(41, 80, 157);
    font-weight: 800;
    right: 0 !important;
  }

  label {
    font-weight: 500;
  }

  input {
    font-size: 14px;
    border-radius: 8px !important;
  }

  input:focus {
    box-shadow: unset;
    border-color: rgba(41, 80, 157) !important;
  }

  .registerBTN {
    background-color: #29509d;
    color: white;
    border-radius: 6px !important;
    transition: all ease 0.5s;
  }

  .registerBTN:hover {
    background-color: #7ac3f0;
    z-index: unset !important;
  }

  @media only screen and (min-width: 992px) {
    .Form-Container {
      width: 45% !important;
    }
  }
`;

export default Form;