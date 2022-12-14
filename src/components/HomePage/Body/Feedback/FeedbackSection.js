import Title from "../../../Title";
import Text from "../../../Text";
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";
import linkedin from "../../../../assets/images/linkedin.svg";
import instagram from "../../../../assets/images/instagram.svg";
import twitter from "../../../../assets/images/twitter.svg";
import user1 from "../../../../assets/images/user1.jpeg";
import user2 from "../../../../assets/images/user2.jpg";
import user3 from "../../../../assets/images/user3.jpg";
import user4 from "../../../../assets/images/user4.jpeg";
import user5 from "../../../../assets/images/user5.jpeg";
import user6 from "../../../../assets/images/user6.jpeg";
import user7 from "../../../../assets/images/user7.jpeg";
import FeedbackItem from "../Feature/FeedbackItem";

const items = [
    {
        icon: instagram,
        img: user1,
        title: "rezanilforoushan.pv",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
    },
    {
        icon: instagram,
        img: user2,
        title: "Mohammad Mehdi Roshani",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
    },
    {
        icon: instagram,
        img: user3,
        title: "ali shirdastian",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
    },
    {
        icon: twitter,
        img: user4,
        title: "Sani.hb",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
    },
    {
        icon: twitter,
        img: user5,
        title: "VahidStar@",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
    },
    {
        icon: linkedin,
        img: user6,
        title: "Ali_Rezayi",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
    },
    {
        icon: linkedin,
        img: user7,
        title: "Kiumad@",
        text: "لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است"
    }
];

const responsive = {
    0: {items: 1},
    600: {items: 2},
    804: {items: 3},
    1075: {items: 4},
    1430: {items: 5}
};

const FeedbackSection = () => {
    return (
        <Content className={"my-5"} id="Comments">
            <Top className={"mb-3"}>
                <Title>نظرات کاربران</Title>
                <Text>مارا در شبکه های اجتماعی دنبال کنید!</Text>
            </Top>
            <SliderContainer>
                <AliceCarousel
                    responsive={responsive}
                    items={renderItems(items)}
                    disableButtonsControls
                    disableSlideInfo
                    disableDotsControls
                    mouseTracking
                    autoPlay
                    autoPlayStrategy={"none"}
                    animationDuration={1000}
                    autoPlayInterval={1000}
                    infinite/>
            </SliderContainer>
        </Content>
    );
}

const renderItems = (items) => {
    return items.map(({title, img, icon, text}, i) => {
        return (
            <FeedbackItem title={title} text={text} img={img} icon={icon} key={i}/>
        );
    });
}

const Content = styled.div`
  padding-bottom: 5rem;
  padding-top: 5rem;
`;
const Top = styled.div`
    display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const SliderContainer = styled.div`
    display: flex;
  width: 100%;
`;


export default FeedbackSection;