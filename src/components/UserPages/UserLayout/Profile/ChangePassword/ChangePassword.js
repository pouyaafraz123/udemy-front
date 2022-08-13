import React, {useState} from "react";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";
import VisibilityIcon from "@mui/icons-material/Visibility";
import styled from "styled-components";
import {Link} from "react-router-dom";

const ChangePassword = (props) => {
    const [passwordShown, setPasswordShown] = useState(false);
    const togglePassword = () => {
        setPasswordShown(!passwordShown);
    };
    return (
        <>
            <Container>
                <PropertyDiv className="mb-5">
                    <label htmlFor={"oldPass"}>رمز فعلی</label>
                    <div className="input-group">
                        <input
                            type={passwordShown ? "text" : "password"}
                            className="form-control mb-3 border-left-0"
                            id={"oldPass"}
                            placeholder={"لطفا رمز فعلی خود را وارد نمایید"}
                        />
                        <div className="input-group-append">
                            <div className="Icon input-group-text" onClick={togglePassword}>
                                {passwordShown ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                            </div>
                        </div>
                    </div>
                </PropertyDiv>
                <PropertyDiv className="mb-5">
                    <label htmlFor={"newPass"}>رمز جدید</label>
                    <div className="input-group">
                        <input
                            type={passwordShown ? "text" : "password"}
                            className="form-control mb-3 border-left-0"
                            id={"newPass"}
                            placeholder={"لطفا رمز جدید خود را وارد نمایید"}
                        />
                        <div className="input-group-append">
                            <div className="Icon input-group-text" onClick={togglePassword}>
                                {passwordShown ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                            </div>
                        </div>
                    </div>
                </PropertyDiv>
                <PropertyDiv className="mb-5">
                    <label htmlFor={"newPassRpt"}>رمز جدید</label>
                    <div className="input-group">
                        <input
                            type={passwordShown ? "text" : "password"}
                            className="form-control mb-3 border-left-0"
                            id={"newPassRpt"}
                            placeholder={"لطفا رمز جدید خود را مجددا وارد نمایید"}
                        />
                        <div className="input-group-append">
                            <div className="Icon input-group-text" onClick={togglePassword}>
                                {passwordShown ? <VisibilityOffIcon/> : <VisibilityIcon/>}
                            </div>
                        </div>
                    </div>
                </PropertyDiv>
            </Container>
            <PropertyDiv className="d-flex align-items-center justify-content-end mb-4">
                <Link to="/" type="button"
                      className="btn registerBTN">تغییر گذرواژه</Link>
            </PropertyDiv>
        </>
    );
}

const Container = styled.div`
    max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit,minmax(430px,1fr));
  grid-template-rows: auto;
  grid-column-gap: 120px;
  @media(max-width: 500px){
    grid-template-columns: 100%;
  }
`;

const PropertyDiv = styled.div`
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

  input {
    font-size: 14px;
    border-radius: 8px !important;
  }

  input:focus {
    box-shadow: unset;
    border-color: rgba(41, 80, 157) !important;
  }

  input:focus + .input-group-append .Icon {
    box-shadow: unset !important;
    border: 1px solid rgba(41, 80, 157) !important;
  }

  .registerBTN {
    background-color: #29509d;
    color: white;
    border-radius: 6px !important;
    transition: all ease 0.5s;
    padding: 7px 50px;
    font-size: 14px;
    font-weight: 400;
  }

  .registerBTN:hover {
    background-color: #7ac3f0;
    z-index: unset !important;
  }
`;

export default ChangePassword;