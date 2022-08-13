import styled from "styled-components";
import SearchBox from "../../Common/SerachBox";
import GlobalStyle from "../../../../containers/Global/GlobalStyle";
import KeyboardArrowLeftIcon from '@mui/icons-material/KeyboardArrowLeft';
import KeyboardArrowRightIcon from '@mui/icons-material/KeyboardArrowRight';
import user3 from "../../../../assets/images/user3.jpg";
import user4 from "../../../../assets/images/user4.jpeg";
import user5 from "../../../../assets/images/user5.jpeg";
import user6 from "../../../../assets/images/user6.jpeg";
import user7 from "../../../../assets/images/user7.jpeg";
import CommentList from "./CommentList";

const items = [
    {
        img: user3,
        author:"بهزاد رضازاده نوبر",
        date:"1401/02/11 - 13:19:08",
        content:"نام محتوا : متخصص جاوا / JavaFx / معرفی JavaFX",
        rating:5,
        text:"تنلنلنلنت"
    },
    {
        img: user3,
        author:"بهزاد رضازاده نوبر",
        date:"1401/02/11 - 13:19:08",
        content:"نام محتوا : متخصص جاوا / JavaFx / معرفی JavaFX",
        rating:5,
        text:"تنلنلنلنت"
    },
    {
        img: user3,
        author:"بهزاد رضازاده نوبر",
        date:"1401/02/11 - 13:19:08",
        content:"نام محتوا : متخصص جاوا / JavaFx / معرفی JavaFX",
        rating:5,
        text:"تنلنلنلنت"
    },
    {
        img: user3,
        author:"بهزاد رضازاده نوبر",
        date:"1401/02/11 - 13:19:08",
        content:"نام محتوا : متخصص جاوا / JavaFx / معرفی JavaFX",
        rating:5,
        text:"تنلنلنلنت"
    },
    {
        img: user3,
        author:"بهزاد رضازاده نوبر",
        date:"1401/02/11 - 13:19:08",
        content:"نام محتوا : متخصص جاوا / JavaFx / معرفی JavaFX",
        rating:5,
        text:"تنلنلنلنت"
    },
    {
        img: user3,
        author:"بهزاد رضازاده نوبر",
        date:"1401/02/11 - 13:19:08",
        content:"نام محتوا : متخصص جاوا / JavaFx / معرفی JavaFX",
        rating:5,
        text:"تنلنلنلنت"
    },
    {
        img: user3,
        author:"بهزاد رضازاده نوبر",
        date:"1401/02/11 - 13:19:08",
        content:"نام محتوا : متخصص جاوا / JavaFx / معرفی JavaFX",
        rating:5,
        text:"تنلنلنلنت"
    },
];
const CommentManagementPage= () => {
    return (
        <Container>
            <GlobalStyle color={"#f3f4f6"}/>
            <SearchBox
                title={"نظرات کاربران"}
                btnText={"جستجو بر اساس اطلاعات کاربر"}
                placeHolder={"جستجو بر اساس اطلاعات کاربر ..."}
                hidden
            />
            <Bottom>
                {renderList(items)}
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