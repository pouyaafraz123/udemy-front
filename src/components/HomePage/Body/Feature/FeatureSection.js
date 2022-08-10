import Title from "../../../Title";
import Text from "../../../Text";
import styled from "styled-components";
import feature1 from "../../../../img/feature1.svg";
import feature2 from "../../../../img/feature2.svg";
import feature3 from "../../../../img/feature3.svg";
import FeatureItem from "./FeatureItem";
import {useState} from "react";

const features = [
    {
        title: "مدیریت محتوا",
        text: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز`,
        img: feature1
    },
    {
        title: "یادگیری الکترونیکی",
        text: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز`,
        img: feature2
    },
    {
        title: "لورم ایپسوم",
        text: `لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است و برای شرایط فعلی تکنولوژی مورد نیاز`,
        img: feature3
    }
];

const FeatureSection = () => {
    const [selected, setSelected] = useState(0);
    return (
        <Content className={"container my-5 pb-5"}>
            <div className={"d-flex align-items-center justify-content-center"}>
                <Top>
                    <Title>ویژگی های یادینا</Title>
                    <Text>لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است
                          چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم است</Text>
                </Top>
            </div>
            <Bottom className={"row d-flex align-items-center justify-content-center mt-5"}>
                <Right className={"col-xl-6 col-12 d-flex align-items-center justify-content-center"}>
                    <Image src={features[selected].img} alt={"feature"} className={"img-fluid"}/>
                </Right>
                <Left className={"col-xl-6 col-12"}>
                    {renderItems(features, selected,setSelected)}
                </Left>
            </Bottom>
        </Content>
    );
}

const renderItems = (features, selected, setSelected) => {
    return features.map((f, i) => {
        return (
            <FeatureItem
                title={f.title}
                text={f.text}
                index={i + 1}
                key={i}
                selected={i === selected}
                setSelected={setSelected}
            />
        );
    });
}
const Content = styled.div`
  max-width: 70% !important;
  @media(max-width: 1400px){
    max-width: 90% !important;
  }
  @media(max-width: 1400px){
    max-width: 100% !important;
  }
`;
const Top = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 70%;
  text-align: center;
`;
const Bottom = styled.div``;
const Right = styled.div`
  @media(max-width: 350px){
    padding: 0 !important;
  }
`;
const Left = styled.div``;
const Image = styled.img`
  @media(max-width: 1200px){
    max-width: 480px;
    max-height: 320px;
    width: 100%;
    margin-bottom: 3rem;
  }
  
`;

export default FeatureSection;