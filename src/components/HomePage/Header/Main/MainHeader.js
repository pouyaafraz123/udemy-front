import img from "../../../../img/intro-illustration.svg";
import styled from "styled-components";
import Title from "../../../Title";
import Text from "../../../Text";

const MainHeader = () => {
    return (
        <Content className={"container-fluid"} id="Home">
            <Row className={"row"}>
                <Right className={"col-xl-6 col-md-12 col-12 d-flex justify-content-center align-items-center"}>
                    <RightContent>
                        <Title>سامانه جامع آموزش دوره‌های تخصصی</Title>
                        <Text>سامانه ای هوشمند آموز برپایه محتوا، آموزش برخط و طراحی آزمون، جهت ارتقا سطح فنی و تخص کت
                              کنندگان در دوره های پیشنهادی با سناریوهای مختل</Text>
                        <Link>ورود به سامانه</Link>
                    </RightContent>
                </Right>
                <Left className={"col-xl-6 col-md-12 col-12 d-flex justify-content-center align-items-center"}>
                    <Image src={img} alt={"intro"} className={"img-fluid"}/>
                </Left>
            </Row>
        </Content>
    );
}

const Content = styled.div`
  background: rgba(249, 250, 251);
  padding-top: 50px;
`;
const Row = styled.div`
`;
const Right = styled.div`
`;
const RightContent = styled.div`
  width: 550px;
  @media (max-width: 600px ) {
    width: 80%;
  }
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
`;
const Left = styled.div``;
const Link = styled.a`
  font-weight: 700;
  transition: all .3s;
  padding: 5px 10px;
  cursor: pointer;

  &, &:link, &:visited {
    color: rgba(41, 80, 157);
    text-decoration: none;
  }

  &:hover {
    background-color: rgba(41, 80, 157, .1);
    text-decoration: none;
    border-radius: 5px;
  }
`;
const Image = styled.img``;

export default MainHeader;