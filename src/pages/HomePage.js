import styled from "styled-components";
import Layout from "../containers/Layout/Layout";
import Header from "../components/HomePage/Header/Header";

const HomePage = () => {
    return (
        <>
            <Container>
                <Layout>
                    <Header />
                </Layout>
            </Container>
        </>
    );
}

const Container = styled.div`

`;

export default HomePage;