import React, {useEffect, useState} from "react";
import FileChooser from "../FileChooser/FileChooser";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {authState} from "../../../../../features/AuthSlice";
import {getDataWithToken, updateDataWithToken} from "../../../../../api/Axios";
import {useQuery} from "@tanstack/react-query";

const EditProfile = (props) => {
    const [name, setName] = useState("");
    const [family, setFamily] = useState("");
    const [email, setEmail] = useState("");
    const [birthDay, setBirthDay] = useState("");
    const [studentCode, setStudentCode] = useState("");
    const [university, setUniversity] = useState("");
    const [context, setContext] = useState("");
    const [semester, setSemester] = useState("");
    const [bio, setBio] = useState("");
    const [avatar, setAvatar] = useState("");


    const token = useSelector(authState).user.token;
    const getProfileData = async () => {
        const {data} = await getDataWithToken("/profile", token);
        return data;
    }
    const {data, error, isError, isLoading} = useQuery(["profile"], getProfileData);

    useEffect(() => {
        if (data) {
            setName(data.name);
            setFamily(data.last_name);
            setEmail(data.email);
            setBirthDay(data.birthday);
            setStudentCode(data.student_number);
            setUniversity(data.university);
            setContext(data.field_of_study);
            setSemester(data.active_semester);
            setBio(data.biography);
            setAvatar(data.avatar);
        }
    }, [data]);

    if (isLoading) {
        return ""
    }

    console.log(data)

    const updateData = () => {
        updateDataWithToken("/profile", {
            name: name,
            last_name: family,
            email: email,
            birthday: birthDay,
            student_number: studentCode,
            university: university,
            field_of_study: context,
            active_semester: semester,
            biography: bio,
        }, token).then(response => {
            console.log(response);
            return response;
        }).catch(error => {
            console.log(error);
            return error;
        })
    }

    return (
        <>
            <Container>
                <PropertyDiv className="mb-5">
                    <label htmlFor="name">نام</label>
                    <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" id="name"
                           className="form-control"
                           placeholder="لطفا نام جدید خود را وارد نمایید"/>
                </PropertyDiv>
                <PropertyDiv className="mb-5">
                    <label htmlFor="family">نام خانوادگی</label>
                    <input value={family} onChange={(e) => setFamily(e.target.value)} type="text" name="family"
                           id="family" className="form-control"
                           placeholder="لطفا نام خانوادگی جدید خود را وارد نمایید"/>
                </PropertyDiv>
                <PropertyDiv className="mb-5">
                    <label htmlFor="email">ایمیل</label>
                    <input value={email} onChange={(e) => setEmail(e.target.value)} type="email" name="email" id="email"
                           className="form-control"
                           placeholder="لطفا ایمیل جدید خود را وارد نمایید"/>
                </PropertyDiv>
                <PropertyDiv className="mb-5">
                    <label htmlFor="birth">تاریخ تولد</label>
                    <input value={birthDay} onChange={(e) => setBirthDay(e.target.value)} type="text" name="" id="birth"
                           className="form-control"
                           placeholder="لطفا تاریخ تولد جدید خود را وارد نمایید"/>
                </PropertyDiv>
                <PropertyDiv className="mb-5">
                    <label htmlFor="studentCode">شماره دانشجویی</label>
                    <input value={studentCode} onChange={(e) => setStudentCode(e.target.value)} type="text"
                           name="studentCode" id="studentCode" className="form-control"
                           placeholder="لطفا شماره دانشجویی جدید خود را وارد نمایید"/>
                </PropertyDiv>
                <PropertyDiv className="mb-5">
                    <label htmlFor="university">نام دانشگاه</label>
                    <input value={university} onChange={(e) => setUniversity(e.target.value)} type="text"
                           name="university" id="university" className="form-control"
                           placeholder="لطفا دانشگاه جدید خود را وارد نمایید"/>
                </PropertyDiv>
                <PropertyDiv className="mb-5">
                    <label htmlFor="context">رشته تحصیلی</label>
                    <input value={context} onChange={(e) => setContext(e.target.value)} type="text" name="context"
                           id="context" className="form-control"
                           placeholder="لطقا رشته تحصیلی جدید خود را وارد نمایید"/>
                </PropertyDiv>
                <PropertyDiv className="mb-5">
                    <label htmlFor="year">نیمسال تحصیلی</label>
                    <input value={semester} onChange={(e) => setSemester(e.target.value)} type="text" name="year"
                           id="year" className="form-control"
                           placeholder="لطفا سال تحصیلی جدید خود را وارد نمایید"/>
                </PropertyDiv>
                <PropertyDiv className="mb-5">
                    <label htmlFor="bio">بیوگرافی</label>
                    <textarea value={bio} onChange={(e) => setBio(e.target.value)} name="bio" id="bio" rows="1"
                              className="form-control"
                              placeholder="لطفا بیوگرافی خود را وارد نمایید"></textarea>
                </PropertyDiv>
            </Container>
            <PropertyDiv className="mb-5 profile">
                <label htmlFor="prof">عکس پروفایل</label>
                <FileChooser avatar={avatar} id="prof"/>
            </PropertyDiv>
            <PropertyDiv className="d-flex align-items-center justify-content-end mb-4">
                <button onClick={() => updateData()} type="button"
                        className="btn registerBTN">ویرایش
                </button>
            </PropertyDiv>
        </>
    );
}


const Container = styled.div`
  max-width: 1200px;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(430px, 1fr));
  grid-template-rows: auto;
  grid-column-gap: 120px;
  @media (max-width: 500px) {
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