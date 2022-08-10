import styled from "styled-components";
import Layout from "../containers/Layout/Layout";
import Header from "../components/HomePage/Header/Header";
import FeatureSection from "../components/HomePage/FeatureSection";
import FeedbackSection from "../components/HomePage/FeedbackSection";

const HomePage = () => {
    return (
        <>
            <Container>
                <Layout>
                    <Header/>
                    <FeatureSection/>
                    <FeedbackSection/>
                </Layout>
            </Container>
        </>
    );
}

const Container = styled.div`

`;

export default HomePage;