import Title from "../Title";
import Text from "../Text";
import styled from "styled-components";
import AliceCarousel from "react-alice-carousel";

const items = [

];
const FeedbackSection = () => {
    return (
        <Content>
            <Top>
                <Title>نظرات کاربران</Title>
                <Text>مارا در شبکه های اجتماعی دنبال کنید!</Text>
            </Top>
            <SliderContainer>
                <AliceCarousel items={null}/>
            </SliderContainer>
        </Content>
    );
}

const Content = styled.div``;
const Top = styled.div``;
const SliderContainer = styled.div``;


export default FeedbackSection;