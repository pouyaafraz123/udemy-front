import styled from "styled-components";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import GlobalStyle from "../../../../containers/Global/GlobalStyle";
import SearchBox from "../../Common/SerachBox";
import UniversityList from "./UniversityList";
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {authState} from "../../../../features/AuthSlice";
import {getDataWithToken} from "../../../../api/Axios";
import {useQuery} from "@tanstack/react-query";

const UniversityManagement = () => {
    useEffect(() => {
        document.title = "مدیریت دانشگاه ها"
    }, []);
    const [url, setUrl] = useState("/category?page=1&search=")
    const token = useSelector(authState).user.token;
    const getCategory = async () => {
        const {data} = await getDataWithToken(url, token);
        console.log(data);
        return data;
    }
    const {data, error, isError, isLoading, refetch} = useQuery(["category"], getCategory);
    if (isLoading) return "";
    console.log(data);
    return (
        <Container>
            <GlobalStyle color={"#f3f4f6"}/>
            <SearchBox
                title={"لیست دانشگاه ها"}
                btnText={"افزودن دانشگاه جدید"}
                placeHolder={"جستجو ..."}
                hidden
                url={url}
                setUrl={setUrl}
                refetch={refetch}
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
           <UniversityList uni={item} index={index} key={index}/>
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

export default UniversityManagement;