import styled from "styled-components";
import SearchBox from "../../Common/SerachBox";
import GlobalStyle from "../../../../containers/Global/GlobalStyle";
import i1 from "../../../../assets/images/i1.jpg";
import i5 from "../../../../assets/images/i5.jpg";
import i6 from "../../../../assets/images/i6.jpg";
import i7 from "../../../../assets/images/i7.jpg";
import i8 from "../../../../assets/images/i8.jpg";
import i9 from "../../../../assets/images/i9.jpg";
import i10 from "../../../../assets/images/i10.jpg";
import i11 from "../../../../assets/images/i11.jpg";

import GridContent from "../../Common/GridContent";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {useState} from "react";
import ListContent from "../../Common/ListContent";
import {useEffect} from "react";

const items = [
    {
        img:i1,
        title:"برنامه نویسی شئ گرا",
        university:"مهندسی کامپیوتر تبریز",
        playlist:1,
        author:"جعفر تنها",
        comment:0
    },
    {
        img:i5,
        title:"متخصص جاوا",
        university:"مهندسی کامپیوتر تبریز",
        playlist:1,
        author:"مسعود توکلی",
        comment:4
    },
    {
        img:i6,
        title:"متخصص UI طراحی رابط کاربری",
        university:"مهندسی کامپیوتر تبریز",
        playlist:2,
        author:"جعفر تنها",
        comment:8
    },
    {
        img:i7,
        title:"آشنایی با امکانات جدید لاراول 8",
        university:"مهندسی کامپیوتر تبریز",
        playlist:0,
        author:"جعفر تنها",
        comment:0
    },
    {
        img:i8,
        title:"آموزش المنتور",
        university:"مهندسی کامپیوتر تبریز",
        playlist:0,
        author:"جعفر تنها",
        comment:0
    },
    {
        img:i9,
        title:"آموزش پیشرفته پایتون",
        university:"مهندسی کامپیوتر تبریز",
        playlist:0,
        author:"مسعود توکلی",
        comment:0
    },
    {
        img:i10,
        title:"آموزش جاوا اسکریپت ES6",
        university:"مهندسی کامپیوتر تبریز",
        playlist:0,
        author:"مسعود توکلی",
        comment:0
    },
    {
        img:i11,
        title:"آموزش tailwindcss",
        university:"مهندسی کامپیوتر تبریز",
        playlist:0,
        author:"مسعود توکلی",
        comment:0
    },
];
const ChannelPage = () => {
    useEffect(() => {
        document.title = "کانال ها"
    },[]);
    const [isList, setIsList] = useState(false);
    return (
        <Container>
            <GlobalStyle color={"#f3f4f6"}/>
            <SearchBox
                isList={isList}
                setIsList={setIsList}
                title={"لیست کانال ها"}
                btnText={"افزودن کانال جدید"}
                placeHolder={"جستجو بر اساس نام کانال ..."}
            />
            <Bottom>
                <ButtonGroup>
                    <Button className={"selected"}>همه کانال ها</Button>
                    <Button>کانال های من</Button>
                    <Button>کانال های عضو شده</Button>
                </ButtonGroup>
                {renderItems(items, isList)}
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
            <ListContent item={item} index={index} key={index} channel/>
        );
    });
}

const renderGrids = (items) => {
    return items.map((item, index) => {
        return (
            <GridContent item={item} channel key={index}/>
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
const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-template-rows: auto;
  grid-gap: 25px;

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