import styled from "styled-components";
import SearchBox from "../../Common/SerachBox";
import GlobalStyle from "../../../../containers/Global/GlobalStyle";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {useEffect, useState} from "react";
import {useSelector} from "react-redux";
import {authState} from "../../../../features/AuthSlice";
import {getDataWithToken} from "../../../../api/Axios";
import {useQuery} from "@tanstack/react-query";
import GridChannel from "./GridChannel";
import ListChannel from "./ListChannel";


const ChannelPage = () => {
    useEffect(() => {
        document.title = "کانال ها"
    }, []);
    const [isList, setIsList] = useState(false);
    const [select, setSelect] = useState(0);
    const [url, setUrl] = useState("/channel?list_type=&page=1&status=&search=");
    const token = useSelector(authState).user.token;
    const getChannels = async () => {
        const {data} = await getDataWithToken(url, token);
        console.log(data);
        return data;
    }
    const {data, error, isError, isLoading, refetch} = useQuery(["channels"], getChannels);
    if (isLoading) return "";
    console.log(data);
    return (
        <Container>
            <GlobalStyle color={"#f3f4f6"}/>
            <SearchBox
                isList={isList}
                setIsList={setIsList}
                title={"لیست کانال ها"}
                btnText={"افزودن کانال جدید"}
                placeHolder={"جستجو بر اساس نام کانال ..."}
                url={url}
                setUrl={setUrl}
                refetch={refetch}
            />
            <Bottom>
                <ButtonGroup>
                    <Button
                        className={select === 0 ? "selected" : ""}
                        onClick={() => {
                            setSelect(0)
                            setUrl("/channel?list_type=&page=1&status&search=");
                            setTimeout(() => refetch(), 100)
                        }
                        }
                    >همه کانال ها
                    </Button>
                    <Button
                        className={select === 1 ? "selected" : ""}
                        onClick={() => {
                            setSelect(1)
                            setUrl("/channel?list_type=my_self&page=1&search=");
                            setTimeout(() => refetch(), 100)
                        }
                        }
                    >کانال های من</Button>
                    <Button
                        className={select === 2 ? "selected" : ""}
                        onClick={() => {
                            setSelect(2)
                            setUrl("/channel?list_type=joined&page=1&search=");
                            setTimeout(() => refetch(), 100)
                        }
                        }
                    >کانال های عضو شده</Button>
                </ButtonGroup>
                {renderItems(data.list, isList)}
            </Bottom>
            <NextPage>
                <Box><KeyboardArrowRightIcon/></Box>
                <Box className={"selected"}>1</Box>
                <Box><KeyboardArrowLeftIcon/></Box>
            </NextPage>
        </Container>
    );
}

const renderItems = (items, isList) => {
    if (isList)
        return renderList(items)
    return <GridContainer>{renderGrids(items)}</GridContainer>;
}

const renderList = (items) => {
    return items.map((item, index) => {
        return (
            <ListChannel item={item} index={index} key={index} channel/>
        );
    });
}

const renderGrids = (items) => {
    return items.map((item, index) => {
        return (
            <GridChannel item={item} channel key={index}/>
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

  @media only screen and (max-width: 350px) {
    font-size: 11px;
  }

  &:hover {
    background: rgba(156, 163, 175, .1);
  }
`;
const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-template-rows: auto;
  grid-gap: 25px;
  justify-items: center;
  @media only screen and (max-width: 350px) {
    grid-template-columns: 100%
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

export default ChannelPage;