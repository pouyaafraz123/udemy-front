import GlobalStyle from "../../../../containers/Global/GlobalStyle";
import SearchBox from "../../Common/SerachBox";
import KeyboardArrowRightIcon from "@mui/icons-material/KeyboardArrowRight";
import KeyboardArrowLeftIcon from "@mui/icons-material/KeyboardArrowLeft";
import PlaylistPage from "./PlaylistPage";
import {useEffect, useState} from "react";
import styled from "styled-components";
import {useNavigate} from "react-router-dom";
import {useSelector} from "react-redux";
import {authState} from "../../../../features/AuthSlice";
import {getDataWithToken} from "../../../../api/Axios";
import {useQuery} from "@tanstack/react-query";

const Playlist = () => {
    useEffect(() => {
        document.title = "لیست پخش ها"
    }, []);
    const navigate = useNavigate();
    const [myList, setMyList] = useState(false)
    const [isList, setIsList] = useState(false);
    const [url, setUrl] = useState("/playlist?list_type=&channel_id=&status=updating&search=");
    const token = useSelector(authState).user.token;
    const getPlaylists = async () => {
        const {data} = await getDataWithToken(url, token);
        return data;
    }
    const {data, error, isError, isLoading, refetch} = useQuery(["playlist"], getPlaylists);


    if (isLoading) return "";
    return (
        <Container>
            <GlobalStyle color={"#f3f4f6"}/>
            <SearchBox
                isList={isList}
                setIsList={setIsList}
                title={"لیست پخش ها"}
                btnText={"افزودن لیست پخش جدید"}
                placeHolder={"جستجو بر اساس نام لیست پخش ..."}
                url={url}
                setUrl={setUrl}
                refetch={refetch}
            />
            <Bottom>
                <ButtonGroup>
                    <Button className={myList ? "" : "selected"} onClick={() => {
                        setMyList(false);
                        setUrl("/playlist?list_type=&channel_id=&status=updating&search=")
                        setTimeout(() => refetch(), 100)

                    }}>همه ی لیست ها</Button>
                    <Button className={myList ? "selected" : ""} onClick={() => {
                        setMyList(true);
                        setUrl("/playlist?list_type=my_self&page=1&search=")
                        setTimeout(() => refetch(), 100)


                    }}>لیست های من</Button>
                </ButtonGroup>
                <PlaylistPage data={data} isList={isList}/>
            </Bottom>
            <NextPage>
                <Box><KeyboardArrowRightIcon/></Box>
                <Box className={"selected"}>1</Box>
                <Box><KeyboardArrowLeftIcon/></Box>
            </NextPage>
        </Container>
    );
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
export default Playlist;