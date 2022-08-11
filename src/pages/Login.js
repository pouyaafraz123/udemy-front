import React from "react";
import GlobalStyle from "../containers/Global/GlobalStyle";
import styled from "styled-components";
import {Link} from "react-router-dom";

const Login = (props) => {
    return (
        <>
            <GlobalStyle color={"#f9fafb"}/>
            <RegisterDiv className="container pt-5 mt-4">
                <div className="d-flex justify-content-center align-items-center">
                    <div className="Form-Container w-100">
                        <h4 className="mb-4 pb-1 align-self-start">ورود به سیستم</h4>
                        <div className="">
                            <label>ایمیل</label>
                            <input type="email" className="form-control mb-3" name="email" id="email"
                                   placeholder="ایمیل خود را وارد نمایید"/>
                        </div>
                        <div className="">
                            <label>رمز عبور</label>
                            <input type="password" className="form-control mb-3" name="password" id="password"
                                   placeholder="رمز عبور خود را وارد نمایید"/>
                        </div>
                        <Link to="/" type="button" className="btn registerBTN align-self-start px-4 mt-3">
                            ورود به
                            سیستم
                        </Link>
                        <p className="mt-4">
                            اگر رمز عبور خود را فراموش کرده اید
                            <Link to="/forgotPassword" className="align-self-start text-decoration-none">کلیک</Link>
                            کنید
                        </p>
                        <p className="mt-2">
                            هنوز عضو نشده اید؟
                            <Link to="/register" className="align-self-start text-decoration-none"> ثبت نام</Link>
                            کنید
                        </p>
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

export default Login;