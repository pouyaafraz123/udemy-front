import styled from "styled-components";

const FeedbackItem = ({icon,img,title,text}) => {
    return (
        <Item>
            <Icon src={icon} alt={"Social Media"}/>
            <Image src={img} alt={"Profile"}/>
            <Bottom>
                <Title>{title}</Title>
                <Text>{text}</Text>
            </Bottom>
        </Item>
    );
}

const Item = styled.div``;
const Icon = styled.img``;
const Image = styled.img``;
const Bottom = styled.div``;
const Title = styled.h1``;
const Text = styled.p``;

export default FeedbackItem;