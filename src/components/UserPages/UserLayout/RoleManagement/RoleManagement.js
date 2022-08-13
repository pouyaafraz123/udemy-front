import React from "react";
import SearchBox from "../../Common/SerachBox";
import Role from "./Role";

const RoleManagement = () => {
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