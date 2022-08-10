import styled from "styled-components";
import Header from "../components/HomePage/Header";
import FeatureSection from "../components/HomePage/FeatureSection";

const HomePage = () => {
    return (
        <Container>
            <Header/>
            <FeatureSection/>
        </Container>
    );
}

const Container = styled.div`

`;

export default HomePage;