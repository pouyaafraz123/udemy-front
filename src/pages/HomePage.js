import styled from "styled-components";
import Layout from "../containers/Layout/Layout";
import Header from "../components/HomePage/Header/Header";
import Body from "../components/HomePage/Body/Body";

const HomePage = () => {
    return (
        <>
            <Container>
                <Layout>
                    <Header/>
                    <Body/>
                </Layout>
            </Container>
        </>
    );
}

const Container = styled.div`

`;

export default HomePage;