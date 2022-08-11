import styled from "styled-components";
import Layout from "../containers/Layout/Layout";
import Header from "../components/HomePage/Header/Header";
import Body from "../components/HomePage/Body/Body";
import Footer from "../components/HomePage/Footer/Footer";

const Home = () => {
    return (
        <>
            <Container>
                <Layout>
                    <Header/>
                    <Body/>
                    <Footer />
                </Layout>
            </Container>
        </>
    );
}

const Container = styled.div`

`;

export default Home;