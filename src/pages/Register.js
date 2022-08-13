import React, {useState} from "react";
import Form from "../components/UserPages/Form/Form";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import styled from "styled-components";
import {useEffect} from "react";

const Register = (props) => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    useEffect(() => {
        document.title = "ثبت نام"
    },[]);
    return (
        <Form
            title={"ثبت نام در سیستم"}
            linkText={"ثبت نام"}
            text={"قبلا عضو شده اید ؟ "}
            linkText2={"وارد"}
            text2={" شوید"}
            login={false}
        >
            <div>
                <label htmlFor={"name"}>نام</label>
                <input
                    type={"text"}
                    className="form-control mb-3"
                    id={"name"}
                    placeholder={"نام خود را وارد نمایید"}
                />
            </div>
            <div>
                <label htmlFor={"fName"}>نام خانوادگی</label>
                <input
                    type={"text"}
                    className="form-control mb-3"
                    id={"fName"}
                    placeholder={"نام خانوادگی خود را وارد نمایید"}
                />
            </div>
            <div>
                <label htmlFor={"phone"}>شماره موبایل</label>
                <input
                    type={"tel"}
                    className="form-control mb-3"
                    id={"phone"}
                    placeholder={"شماره موبایل خود را وارد نمایید"}
                />
            </div>

            <div>
                <label htmlFor={"email"}>ایمیل</label>
                <input
                    type={"email"}
                    className="form-control mb-3"
                    id={"email"}
                    placeholder={"ایمیل خود را وارد نمایید"}
                />
            </div>
            <label htmlFor={"pass"}>رمز عبور</label>
            <PasswordDiv className="input-group">
                <input
                    type={passwordShown ? "text" : "password"}
                    className="form-control mb-3 border-left-0"
                    id={"pass"}
                    placeholder={"رمز عبور خود را وارد نمایید"}
                />
                <div className="input-group-append">
                    <div className="Icon input-group-text" onClick={togglePassword}>
                        {passwordShown ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                    </div>
                </div>
            </PasswordDiv>
            <label htmlFor={"pass2"}>تکرار رمز عبور</label>
            <PasswordDiv className="input-group">
                <input
                    type={passwordShown ? "text" : "password"}
                    className="form-control mb-3 border-left-0"
                    id={"pass2"}
                    placeholder={"رمز عبور خود را وارد نمایید"}
                />
                <div className="input-group-append">
                    <div className="Icon input-group-text" onClick={togglePassword}>
                        {passwordShown ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                    </div>
                </div>
            </PasswordDiv>
        </Form>
    );
}

const PasswordDiv = styled.div`
  .Icon {
    background-color: white;
    border-right: 0;
    height: 35px;
    border-radius: 8px !important;
    cursor: pointer;
  }

  .Icon svg {
    color: #7ac3f0;
    transition: all ease-in-out 0.5s;
  }

  .Icon:hover svg {
    color: #206ee9;
    transform: scale(1.1);
  }

  input:focus + .input-group-append .Icon {
    box-shadow: unset;
    border: 1px solid rgba(41, 80, 157) !important;
  }
`;


export default Register;