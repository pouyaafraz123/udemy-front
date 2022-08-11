import React from "react";
import Form from "../components/UserPages/Form/Form";
import GlobalStyle from "../containers/Global/GlobalStyle";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Register = (props) => {
    const items = [
        {label: "نام", placeHolder: "نام خود را وارد نمایید", type: "text", id: "name"},
        {label: "نام خانوادگی", placeHolder: "نام خانوادگی خود را وارد نمایید", type: "text", id: "family"},
        {label: "شماره موبایل", placeHolder: "شماره موبایل خود را وارد نمایید", type: "tel", id: "phone"},
        {label: "ایمیل", placeHolder: "ایمیل خود را وارد نمایید", type: "email", id: "email"},
        {label: "رمز عبور", placeHolder: "رمز عبور خود را وارد نمایید", type: "password", id: "password"},
        {
            label: "تکرار رمز عبور",
            placeHolder: "رمز عبور خود مجددا را وارد نمایید",
            type: "password",
            id: "passwordRpt"
        },
    ];
    return (
        <>
            <GlobalStyle color={"#f9fafb"}/>
            <RegisterDiv className="container pt-5 mt-4">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="Form-Container w-100">
                        <h4 className="px-3 mb-4 pb-1 align-self-start">ثبت نام در سیستم</h4>
                        <Form inputs={items}/>
                        <Link to="/" type="button" className="btn registerBTN align-self-start px-4 mt-3 mr-3">ثبت نام</Link>
                        <p className="px-3 mt-4">قبلا عضو شده اید ؟ <Link to="/login" className="align-self-start">وارد</Link> شوید</p>
                    </div>
                </div>
            </RegisterDiv>
        </>
    );
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

export default Register;