import styled from "styled-components";
import SearchBox from "../../Common/SerachBox";
import GlobalStyle from "../../../../containers/Global/GlobalStyle";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import CommentList from "./CommentList";
import {useEffect} from "react";
import {useSelector} from "react-redux";
import {authState} from "../../../../features/AuthSlice";
import {getDataWithToken} from "../../../../api/Axios";
import {useQuery} from "@tanstack/react-query";

const CommentManagementPage = () => {
    useEffect(() => {
        document.title = "مدیریت نظرات"
    }, []);
    const token = useSelector(authState).user.token;
    const getComments = async () => {
        const {data} = await getDataWithToken("/admin/comments?page=1&user_search=&active=1", token);
        console.log(data);
        return data;
    }
    const {data, error, isError, isLoading} = useQuery(["comments"], getComments);
    if (isLoading) return "";
    console.log(data);
    return (
        <Container>
            <GlobalStyle color={"#f3f4f6"}/>
            <SearchBox
                title={"نظرات کاربران"}
                btnHidden
                placeHolder={"جستجو بر اساس اطلاعات کاربر ..."}
                hidden
            />
            <Bottom>
                <ButtonGroup>
                    <Button className={"selected"}>نظر های فعال</Button>
                    <Button>نظر های غیر فعال</Button>
                </ButtonGroup>
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
            <CommentList comment={item} key={index}/>
        );
    });
}

const Container = styled.div`
`;
const Bottom = styled.div`
  margin-top: 20px;
`;

const ButtonGroup = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  margin-bottom: 20px;

  .selected {
    background: rgba(41, 80, 157, .1);
    color: rgba(41, 80, 157);
  }
`;
const Button = styled.button`
  color: #9ca3af;
  background-color: transparent;
  border: none;
  outline: none;
  font-size: 14px;
  padding: 6px 12px;
  border-radius: 5px;

  &:hover {
    background: rgba(156, 163, 175, .1);
  }
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

export default CommentManagementPage;