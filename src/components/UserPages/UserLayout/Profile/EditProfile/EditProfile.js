import React from "react";
import FileChooser from "../FileChooser/FileChooser";
import styled from "styled-components";
import {Link} from "react-router-dom";

const EditProfile = (props) => {
    return (
        <>
            <Container>
                <PropertyDiv className="mb-5">
                    <label htmlFor="name">نام</label>
                    <input type="text" name="name" id="name" className="form-control"
                           placeholder="لطفا نام جدید خود را وارد نمایید"/>
                </PropertyDiv>
                <PropertyDiv className="mb-5">
                    <label htmlFor="family">نام خانوادگی</label>
                    <input type="text" name="family" id="family" className="form-control"
                           placeholder="لطفا نام خانوادگی جدید خود را وارد نمایید"/>
                </PropertyDiv>
                <PropertyDiv className="mb-5">
                    <label htmlFor="email">ایمیل</label>
                    <input type="email" name="email" id="email" className="form-control"
                           placeholder="لطفا ایمیل جدید خود را وارد نمایید"/>
                </PropertyDiv>
                <PropertyDiv className="mb-5">
                    <label htmlFor="birth">تاریخ تولد</label>
                    <input type="text" name="" id="birth" className="form-control"
                           placeholder="لطفا تاریخ تولد جدید خود را وارد نمایید"/>
                </PropertyDiv>
                <PropertyDiv className="mb-5">
                    <label htmlFor="studentCode">شماره دانشجویی</label>
                    <input type="text" name="studentCode" id="studentCode" className="form-control"
                           placeholder="لطفا شماره دانشجویی جدید خود را وارد نمایید"/>
                </PropertyDiv>
                <PropertyDiv className="mb-5">
                    <label htmlFor="university">نام دانشگاه</label>
                    <input type="text" name="university" id="university" className="form-control"
                           placeholder="لطفا دانشگاه جدید خود را وارد نمایید"/>
                </PropertyDiv>
                <PropertyDiv className="mb-5">
                    <label htmlFor="context">رشته تحصیلی</label>
                    <input type="text" name="context" id="context" className="form-control"
                           placeholder="لطقا رشته تحصیلی جدید خود را وارد نمایید"/>
                </PropertyDiv>
                <PropertyDiv className="mb-5">
                    <label htmlFor="year">نیمسال تحصیلی</label>
                    <input type="text" name="year" id="year" className="form-control"
                           placeholder="لطفا سال تحصیلی جدید خود را وارد نمایید"/>
                </PropertyDiv>
                <PropertyDiv className="mb-5">
                    <label htmlFor="bio">بیوگرافی</label>
                    <textarea name="bio" id="bio" rows="1" className="form-control"
                              placeholder="لطفا بیوگرافی خود را وارد نمایید"></textarea>
                </PropertyDiv>
            </Container>
            <PropertyDiv className="mb-5 profile">
                <label htmlFor="prof">عکس پروفایل</label>
                <FileChooser id="prof"/>
            </PropertyDiv>
            <PropertyDiv className="d-flex align-items-center justify-content-end mb-4">
                <Link to="/" type="button"
                      className="btn registerBTN">ویرایش</Link>
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
  label {
    font-weight: 500;
    font-size: 14px;
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
    padding: 4px 30px;
    font-size: 14px;
    font-weight: 400;
  }

  .registerBTN:hover {
    background-color: #7ac3f0;
    z-index: unset !important;
  }
`;

export default EditProfile;