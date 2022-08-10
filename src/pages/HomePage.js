import styled from "styled-components";
import Header from "../components/HomePage/Header";
import FeatureSection from "../components/HomePage/FeatureSection";
import FeedbackSection from "../components/HomePage/FeedbackSection";

const HomePage = () => {
    return (
        <Container>
            <Header/>
            <FeatureSection/>
            <FeedbackSection/>
        </Container>
    );
}

const Container = styled.div`

`;

export default HomePage;