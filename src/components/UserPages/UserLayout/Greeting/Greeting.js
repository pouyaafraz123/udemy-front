import React, {useEffect, useState} from "react";
import styled from "styled-components";
import CloseIcon from "@mui/icons-material/Close";
import MenuIcon from "@mui/icons-material/Menu";
import {useSelector} from "react-redux";
import {authState} from "../../../../features/AuthSlice";
import {getDataWithToken} from "../../../../api/Axios";
import {useQuery} from "@tanstack/react-query";

const Greeting = (props) => {
    const [name, setName] = useState("");
    const [family, setFamily] = useState("");
    const [email, setEmail] = useState("");
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
            setAvatar(data.avatar);
        }
    }, [data]);

    return (
        <>
            <Greetingdiv className="d-flex justify-content-between align-items-center">
                <div className="d-flex align-items-center">
                    <img
                        src={/*require("../../../../assets/images/User.png")*/ avatar === "" ? require("../../../../assets/images/User.png") : avatar}
                        alt="logo" style={{width: '40px'}}
                        className="img-fluid"/>
                    <div className="d-flex flex-column justify-content-center pr-2">
                        <p>{name} {family} <small className="text-muted">خوش آمدید!</small></p>
                        <small className="text-muted mt-n3">{email}</small>
                    </div>
                </div>
                <div className="d-xl-none d-lg-block toggler-box shadow-sm" style={{cursor: 'pointer'}}
                     onClick={props.clicked}>
                    {props.open ? <CloseIcon fontSize={"large"}/> :
                        <MenuIcon fontSize={"large"}/>}
                </div>
            </Greetingdiv>
        </>
    );
}

const Greetingdiv = styled.div`
  margin-bottom: 60px;
  @media only screen and (max-width: 576px){
   
  }
    small {
      font-size: 11px !important;
    }

  .toggler-box {
    margin-left: 23px;
    background-color: white;
    border-radius: 5px;
    padding: 3px 2px;
    color: rgba(122,195,240,1);
    transition: all ease 0.5s;
  }
  
  .toggler-box:hover {
    color: #29509d;
  }
`;

export default Greeting;