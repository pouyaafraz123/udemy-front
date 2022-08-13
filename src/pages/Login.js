import React, {useState} from "react";
import Form from "../components/UserPages/Form/Form";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import styled from "styled-components";
import {useEffect} from "@types/react";

const Login = (props) => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    useEffect(() => {
        document.title = "ورود به سیستم"
    },[]);
    return (
        <Form
            title={"ورود به سیستم"}
            linkText={"ورود به سیستم"}
            text={"هنوز عضو نشده اید "}
            linkText2={"ثبت نام"}
            text2={" کنید"}
            login={true}
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
            </div>
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

export default Login;