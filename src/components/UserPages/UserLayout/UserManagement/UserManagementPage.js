import styled from "styled-components";
import SearchBox from "../../Common/SerachBox";
import GlobalStyle from "../../../../containers/Global/GlobalStyle";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import UserList from "./UserList";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {authState} from "../../../../features/AuthSlice";
import {getDataWithToken} from "../../../../api/Axios";
import {useQuery} from "@tanstack/react-query";

const UserManagementPage = () => {
    useEffect(() => {
        document.title = "مدیریت کاربران"
    }, []);
    const token = useSelector(authState).user.token;
    const getUsers = async () => {
        const {data} = await getDataWithToken("/admin/users?page=1&search=", token);
        console.log(data);
        return data;
    }
    const {data, error, isError, isLoading} = useQuery(["users"], getUsers);
    if (isLoading) return "";
    console.log(data);
    return (
        <Container>
            <GlobalStyle color={"#f3f4f6"}/>
            <SearchBox
                title={"لیست کاربران"}
                btnText={"افزودن کاربر جدید"}
                placeHolder={"جستجو بر اساس نام، نام خانوادگی، شماره موبایل و ایمیل ..."}
                hidden
            />
            <Bottom>
                {renderList(data.list)}
            </Bottom>
            <NextPage>
                <Box><KeyboardArrowRightIcon/></Box>
                <Box className={"selected"}>1</Box>
                <Box><KeyboardArrowLeftIcon/></Box>
            </NextPage>
        </Container>
    );
}


const renderList = (items) => {
    return items.map((item, index) => {
        return (
            <UserList user={item} key={index}/>
        );
    });
}

const Container = styled.div`
`;
const Bottom = styled.div`
  margin-top: 20px;
`;

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

export default UserManagementPage;