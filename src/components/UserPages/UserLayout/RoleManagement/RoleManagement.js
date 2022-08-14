import React, {useEffect} from "react";
import SearchBox from "../../Common/SerachBox";
import Role from "./Role";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import styled from "styled-components";

const RoleManagement = () => {
    useEffect(() => {
        document.title = "مدیریت نقش ها و دسترسی"
    }, []);
    return (
        <>
            <SearchBox
                title={"لیست نقش ها"}
                btnText={"افزودن نقش جدید"}
                placeHolder={"جستجو بر اساس نام نقش ..."}
                hidden
            />
            <Role/>
            <NextPage>
                <Box><KeyboardArrowRightIcon/></Box>
                <Box className={"selected"}>1</Box>
                <Box><KeyboardArrowLeftIcon/></Box>
            </NextPage>
        </>
    );
}

const NextPage = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  margin-top: 20px;

  .selected {
    opacity: 1;
  }
`;
const Box = styled.button`
  opacity: .38;
  width: 30px;
  height: 30px;
  font-size: 16px;

  svg {
    font-size: 24px;
  }

  &:not(:last-child) {
    margin-left: 10px;
  }

  outline: none;
  border: #b8b9ba solid 1px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
`;

export default RoleManagement;