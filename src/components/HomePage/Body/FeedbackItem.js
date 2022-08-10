import styled from "styled-components";

const FeedbackItem = ({icon, img, title, text}) => {
    return (
        <ItemContainer className={"item-container"}>
            <Item>
                <Icon src={icon} alt={"Social Media"}/>
                <Image src={img} alt={"Profile"}/>
                <Bottom>
                    <Title>{title}</Title>
                    <Text>{text} <span>&#128525;</span></Text>
                </Bottom>
            </Item>
        </ItemContainer>
    );
}
const ItemContainer = styled.div`
    display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  justify-self: center;
  padding-top: 40px;
  padding-right: 10px;
  margin-left: 10px;
`;
const Item = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  position: relative;
  background: #f9fafb;
  border-radius: 10px;
  padding-top: 30px;
`;
const Icon = styled.img`
  height: 2rem;
  width: 2rem;
  position: absolute;
  top: 25px;
  right: 25px;
`;
const Image = styled.img`
  width: 88px;
  height: 88px;
  position: absolute;
  top: 0;
  left: 50%;
  transform: translate(-50%, -30%);
  border-radius: 500px;
  overflow: hidden;
  border: 5px solid rgba(41,80,157);

`;
const Bottom = styled.div`
    display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin: 40px;
`;
const Title = styled.h1`
    font-size: 1rem;
  font-weight: 700;
  color: black;
`;
const Text = styled.p`
  direction: rtl;
  text-align: center;
  color:rgba(151,143,143);
  font-weight: 300;
  line-height: 1.5rem;
`;

export default FeedbackItem;