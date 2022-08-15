import styled from "styled-components";
import v9 from "../../../../assets/images/v9.svg";
import AccountBoxIcon from "@mui/icons-material/AccountBox";

const CommentList = ({comment}) => {
    return (
        <Content>
            <Top>
                <Right>
                    {
                        comment.user_avatar ? <Image src={comment.user_avatar} alt={comment.user_name}/> :
                            <AccountBoxIcon
                                sx={{color: "#bcbcbc", fontSize: "50px", marginRight: "-5px"}}/>
                    }
                    <Titles>
                        <Title>{comment.user_name}</Title>
                        <Text>{comment.created_at}</Text>
                    </Titles>
                </Right>
                <Details>
                    <Detail>
                        <SmallText>
                            {"نام محتوا: " + comment.channel_name + " / " + comment.playlist_title + " / " + comment.media_name}
                        </SmallText>
                    </Detail>
                    <Detail>
                        <Icon src={v9} alt={"rating"}/>
                        <SmallText>{"امتیاز: " + comment.score}</SmallText>
                    </Detail>
                </Details>
                <Buttons>
                    <Button className={"purple-btn"}>غیرفعال کردن</Button>
                    <Button className={"red-btn"}>حذف</Button>
                </Buttons>
            </Top>
            <Bottom>
                <Paragraph>
                    {comment.comment}
                </Paragraph>
            </Bottom>
        </Content>
    );
}

const Content = styled.div`
  border: 1px solid rgba(222, 222, 222);
  border-radius: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  background: white;
  padding: 20px 36px;
  gap: 16px;
  flex-wrap: wrap;
  transition: all .3s ease-in-out;

  &:hover {
    transform: scale(1.04);
  }

  @media only screen and (max-width: 750px) {
    &:hover {
      transform: scale(1);
    }
  }

  &:not(:last-child) {
    margin-bottom: 12px;
  }

  @media only screen and (max-width: 690px) {
    justify-content: center;
  }
  @media only screen and (max-width: 610px) {
    flex-direction: column;
  }
`;
const Top = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  width: 100%;
  @media only screen and (max-width: 690px) {
    justify-content: center;
    flex-direction: column;
    gap: 10px;
`;
const Bottom = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
`;
const Image = styled.img`
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
  @media only screen and (max-width: 610px) {
    width: 60px;
    height: 60px;
    font-size: 30px;
  }
`;
const Text = styled.div`
  color: #bcbcbc;
  font-size: 12px;
  width: 160px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;
const Paragraph = styled.p`
  color: #bcbcbc;
  font-size: 12px;
  font-weight: 700;
  text-align: right;
  width: 100%;
  @media only screen and (max-width: 690px) {
    text-align: center;
  }
  &::before {
    content: "\\275E";
    font-size: 1.2rem;
    color: #7ac3f0;
    padding: 4px;
  }

  &::after {
    content: "\\275D";
    font-size: 1.2rem;
    color: #7ac3f0;
    padding: 4px;
  }
`;
const Right = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 16px;
  @media only screen and (max-width: 690px) {
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
  @media only screen and (max-width: 690px) {
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
const Details = styled.div`
  display: flex;
  justify-content: start;
  padding-right: 5%;
  gap: 30%;
  align-items: center;
  width: 70%;
  @media only screen and (max-width: 690px) {
    flex-direction: column;
    gap: 10px;
  }
`;
const Detail = styled.div`
  width: 100%;
  display: flex;
  justify-content: start;
  align-items: center;
  color: #7d7d7d;
  gap: 5px;
  @media only screen and (max-width: 690px) {
    justify-content: center;
  }
`;
const Icon = styled.img`
`;
const SmallText = styled.div`
  font-size: 12px;
`;
const Buttons = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 5px;
  @media only screen and (max-width: 690px) {
    margin-top: 25px;
  }

  .green-btn {
    background: #34d399;

    &:hover {
      background: #059669;
    }
  }

  .purple-btn {
    background: #a78bfa;

    &:hover {
      background: #7c3aed;
    }
  }

  .red-btn {
    background: #ef4444;

    &:hover {
      background: #dc2626;
    }
  }
`;
const Button = styled.button`
  color: white;
  font-size: 12px;
  outline: none;
  border: none;
  padding: 4px 8px;
  border-radius: 5px;
  transition: all .3s;
  flex: 0 0 auto;
`;

export default CommentList;