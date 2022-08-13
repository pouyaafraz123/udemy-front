import React, {useEffect} from "react";
import SearchBox from "../../Common/SerachBox";
import Role from "./Role";

const RoleManagement = () => {
    useEffect(() => {
        document.title = "مدیریت نقش ها و دسترسی"
    },[]);
    return (
        <>

            <SearchBox
                title={"لیست نقش ها"}
                btnText={"افزودن نقش جدید"}
                placeHolder={"جستجو بر اساس نام نقش ..."}
                hidden
            />
            <Role/>
        </>
    );
}

export default RoleManagement;