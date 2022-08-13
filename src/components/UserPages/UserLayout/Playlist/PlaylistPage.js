import styled from "styled-components";
import SearchBox from "../../Common/SerachBox";
import GlobalStyle from "../../../../containers/Global/GlobalStyle";
import i1 from "../../../../assets/images/i1.jpg";
import i2 from "../../../../assets/images/i2.jpg";
import i3 from "../../../../assets/images/i3.jpg";
import i4 from "../../../../assets/images/i4.jpg";
import GridContent from "../../Common/GridContent";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import {useState , useEffect} from "react";
import ListContent from "../../Common/ListContent";

const items = [
    {
        img: i1,
        title: "حلقه ها",
        text: "کانال برنامه نویسی شی گرا",
        comment: 0,
        content: 0,
        author: "جعفر تنها",
        university: "دانشگاه تبریز"
    },
    {
        img: i2,
        title: "JavaFx",
        text: "کانال متخصص جاوا",
        comment: 2,
        content: 3,
        author: "مسعود توکلی",
        university: "دانشگاه تبریز"
    },
    {
        img: i3,
        title: "کاربرد تجربه کاربری در طراحی رابط کاربری",
        text: "کانال متخصص UI (طراحی رابط کاربری)",
        comment: 4,
        content: 10,
        author: "جعفر تنها",
        university: "دانشگاه تبریز"
    },
    {
        img: i4,
        title: "مبانی و اصول اولیه در طراحی UI",
        text: "کانال متخصص UI (طراحی رابط کاربری)",
        comment: 0,
        content: 0,
        author: "جعفر تنها",
        university: "دانشگاه تبریز"
    },
];
const PlaylistPage = () => {
    useEffect(() => {
        document.title = "لیست پخش ها"
    },[])
    const [isList, setIsList] = useState(false);
    return (
        <Container>
            <GlobalStyle color={"#f3f4f6"}/>
            <SearchBox
                isList={isList}
                setIsList={setIsList}
                title={"لیست پخش ها"}
                btnText={"افزودن لیست پخش جدید"}
                placeHolder={"جستجو بر اساس نام لیست پخش ..."}
            />
            <Bottom>
                <ButtonGroup>
                    <Button className={"selected"}>همه ی لیست ها</Button>
                    <Button>لیست های من</Button>
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
            <ListContent item={item} index={index} key={index}/>
        );
    });
}

const renderGrids = (items) => {
    return items.map((item, index) => {
        return (
            <GridContent item={item} key={index}/>
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

export default PlaylistPage;