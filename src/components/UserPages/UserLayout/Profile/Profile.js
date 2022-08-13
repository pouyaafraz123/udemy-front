import React, {useEffect, useState} from "react";
import EditProfile from "./EditProfile/EditProfile";
import ChangePassword from "./ChangePassword/ChangePassword";
import styled from "styled-components";

const Profile = (props) => {
    useEffect(() => {
        document.title = "پروفایل من"
    }, []);
    const [tab, setTab] = useState("editProf");
    const [active, setActive] = useState(true);
    const changeTab = (currentTab) => {
        setTab(currentTab);
        setActive(currentTab === "editProf");
    }
    return (
        <TabDiv>
            <h5 className="mb-3">پروفایل کاربر</h5>
            <div className="mt-2 mb-5">
                <button className={active ? "active" : ""} onClick={() => changeTab("editProf")}>ویرایش پروفایل</button>
                <button className={active ? "" : "active"} onClick={() => changeTab("editPass")}>تغییر گذرواژه</button>
            </div>
            {tab === "editProf" ? <EditProfile/> : <ChangePassword/>}
        </TabDiv>
    );
}

const TabDiv = styled.div`
  button {
    background-color: transparent;
    outline: none;
    border: none;
    margin-left: 20px;
    color: rgba(188, 188, 188, 1);
    font-size: 14px;
  }

  h5 {
    font-weight: 700;
  }

  button.active, h5 {
    color: rgba(41, 80, 157, 1);
  }
`;

export default Profile;