import React, {useEffect, useState} from "react";
import Form from "../components/UserPages/Form/Form";
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import styled from "styled-components";
import {sendData} from "../api/Axios";
import {signIn} from "../features/AuthSlice";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom";

const Login = (props) => {
    const [passwordShown, setPasswordShown] = useState(false);
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const dispatch = useDispatch();
    const navigate = useNavigate();

    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    useEffect(() => {
        document.title = "ورود به سیستم"
    }, []);


    return (
        <Form
            title={"ورود به سیستم"}
            linkText={"ورود به سیستم"}
            text={"هنوز عضو نشده اید "}
            linkText2={"ثبت نام"}
            text2={" کنید"}
            login={true}
        >
            <form className="w-100 px-3" action={"#"}>
                <div>
                    <label htmlFor={"email"}>ایمیل</label>
                    <input
                        type={"email"}
                        className="form-control mb-3"
                        id={"email"}
                        placeholder={"ایمیل خود را وارد نمایید"}
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
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
                            onChange={(e) => setPassword(e.target.value)}
                            value={password}
                        />
                        <div className="input-group-append">
                            <div className="Icon input-group-text" onClick={togglePassword}>
                                {passwordShown ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                            </div>
                        </div>
                    </PasswordDiv>
                </div>
                <button type={"submit"} onClick={(e) => {
                    e.preventDefault();
                    checkLogin(email, password, dispatch, navigate);
                }}
                        className="btn registerBTN align-self-start px-4 mt-3">ورود به سیستم
                </button>
            </form>
        </Form>
    );
}

const checkLogin = async (email, password, dispatch, navigate) => {
    await sendData("/login", {
        email: email,
        password: password
    }).then(response => {
        if (response && response.data) {
            dispatch(signIn(response.data));
            navigate("/admin/dashboard")
        }
        return response;
    })
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