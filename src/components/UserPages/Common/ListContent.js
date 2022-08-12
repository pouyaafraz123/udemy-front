import styled from "styled-components";
import v1 from "../../../assets/images/v1.svg";
import v2 from "../../../assets/images/v2.svg";
import v3 from "../../../assets/images/v3.svg";


const ListContent = ({item,index}) => {
    return (
        <Content>
            <Right>
                <Number>{index+1}</Number>
                <Titles>
                    <Title>{item.title}</Title>
                    <Text>{item.university}</Text>
                </Titles>
            </Right>
            <Details>
                <Detail>
                    <Icon src={v1} alt={"content"}/>
                    <SmallText>تعداد محتوا: {item.content}
                    </SmallText>
                </Detail>
                <Detail>
                    <Icon src={v2} alt={"comment"}/>
                    <SmallText>
                        تعداد نظر:
                        {item.comment}
                    </SmallText>
                </Detail>
                <Detail>
                    <Icon src={v3} alt={"status"}/>
                    <SmallText>وضعیت: در حال بروزرسانی</SmallText>
                </Detail>
            </Details>
            <Buttons>
                <Button className={"green-btn"}>مشاهده</Button>
                <Button className={"purple-btn"}>ویرایش</Button>
                <Button className={"red-btn"}>حذف</Button>
            </Buttons>
        </Content>
    );
}

const Content = styled.div`
  border: 1px solid rgba(222,222,222);
  border-radius: 10px;
    display: flex;
  justify-content: start;
  align-items: center;
  background: white;
  padding: 20px 36px;
  gap: 16px;
  flex-wrap: wrap;
  &:not(:last-child){
    margin-bottom: 12px;
  }
  @media only screen and (max-width: 690px){
    justify-content: center;
  }
  @media only screen and (max-width: 610px){
    flex-direction: column;
  }
`;
const Right = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 16px;
  @media only screen and (max-width: 610px){
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
`;
const Number = styled.div`
  width: 40px;
  height: 40px;
  flex: 0 0 auto;
  color: #29509d;
  background: #F3f4f6;
  border-radius: 5px;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 18px;
  font-family: sans-serif;
  @media only screen and (max-width: 610px){
    width: 60px;
    height: 60px;
    font-size: 30px;
  }
`;
const Titles = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  color: #29509d;
  font-size: 16px;
  width: 160px;
  text-overflow: ellipsis;
  white-space: nowrap;
  font-weight: 700;
  overflow: hidden;
`;
const Text = styled.div`
  color: #bcbcbc;
  font-size: 12px;
  width: 160px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const Details = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  width: 70%;
  flex-wrap: wrap;
  @media only screen and (max-width: 610px){
    flex-direction: column;
    gap: 10px;
  }
`;
const Detail = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  color: #7d7d7d;
  gap: 5px;
`;
const Icon = styled.img`
`;
const SmallText = styled.div`
    font-size: 12px;
`;
const Buttons = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  .green-btn{
    background: #34d399;
  }
  .purple-btn{
    background: #a78bfa;
  }
  .red-btn{
    background: #ef4444;
  }
`;
const Button = styled.button`
    color: white;
  font-size: 12px;
  outline: none;
  border: none;
  padding: 4px 8px;
  border-radius: 5px;
`;

export default ListContent;