import {useParams} from "react-router-dom";
import styled from "styled-components";
import {useSelector} from "react-redux";
import {authState} from "../../../../features/AuthSlice";
import {getDataWithToken} from "../../../../api/Axios";
import {useQuery} from "@tanstack/react-query";

const PlaylistComponent = () => {
    const id = useParams().id;
    const token = useSelector(authState).user.token;
    const getPlaylist = async () => {
        const {data} = await getDataWithToken(`/playlist/${id}?page=1`, token);
        return data;
    }
    const {data, error, isError, isLoading} = useQuery(["playlist" + id], getPlaylist);
    if (isLoading) return "";
    console.log(data)
    return (
        <Container>
            <Right>
                <Title></Title>
                <Text></Text>
                <Items></Items>
            </Right>
            <Left>
                <Top>
                    <Links>
                        <MyLink>لیست پخش ها</MyLink>
                        <MyLink></MyLink>
                    </Links>
                    <Btn><Icon></Icon></Btn>
                </Top>
                <Main>
                    <ImagePlace>
                        <Img/>
                        <Image/>
                        <Img/>
                    </ImagePlace>
                    <Info>
                        <BlueTitle></BlueTitle>
                        <BigTitle></BigTitle>
                        <BigText></BigText>
                        <Details>
                            <Detail></Detail>
                            <Detail></Detail>
                            <Detail></Detail>
                            <Detail></Detail>
                            <Detail></Detail>
                            <Detail></Detail>
                            <Detail></Detail>
                            <Detail></Detail>
                        </Details>
                    </Info>
                </Main>

            </Left>
        </Container>
    );
}

const Container = styled.div``;
const Right = styled.div``;
const Left = styled.div``;
const Top = styled.div``;
const Title = styled.h1``;
const Text = styled.div``;
const Items = styled.div``;
const Links = styled.div``;
const MyLink = styled.a``;
const Btn = styled.button``;
const Icon = styled.img``;
const Main = styled.div``;
const ImagePlace = styled.div``;
const Img = styled.img``;
const Image = styled.img``;
const Info = styled.div``;
const BlueTitle = styled.div``;
const BigTitle = styled.div``;
const BigText = styled.div``;
const Details = styled.div``;
const Detail = styled.div``;


export default PlaylistComponent;