import React from "react";
import GlobalStyle from "../containers/Global/GlobalStyle";
import styled from "styled-components";
import {Link} from "react-router-dom";
import Form from "../components/UserPages/Form/Form";

const Login = (props) => {
    return (
        <Form
            title={"ورود به سیستم"}
            linkText={"کلیک"}
            text={"هنوز عضو نشده اید "}
            linkText2={"ثبت نام"}
            text2={" کنید"}
            login
        >
            <div>
                <label htmlFor={"email"}>ایمیل</label>
                <input
                    type={"email"}
                    className="form-control mb-3"
                    id={"email"}
                    placeholder={"ایمیل خود را وارد نمایید"}
                />
            </div>
            <div>
                <label htmlFor={"pass"}>رمز عبور</label>
                <input
                    type={"password"}
                    className="form-control mb-3"
                    id={"pass"}
                    placeholder={"رمز عبور خود را وارد نمایید"}
                />
            </div>
        </Form>
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