import styled from "styled-components";
import v4 from "../../../../assets/images/v4.svg";
import v5 from "../../../../assets/images/v5.svg";
import v6 from "../../../../assets/images/v6.svg";
import AccountBoxIcon from '@mui/icons-material/AccountBox';

const UserList = ({user}) => {

    return (
        <Content>
            <Right>
                {
                    user.avatar ? <Image src={user.avatar} alt={user.name}/> : <AccountBoxIcon
                        sx={{color: "#bcbcbc", fontSize: "50px", marginRight: "-5px"}}/>
                }
                <Titles>
                    <Title>{user.name + " " + user.last_name}</Title>
                    <Text>{user.role}</Text>
                </Titles>
            </Right>
            <Details>
                <Detail>
                    <Icon src={v4} alt={"email"}/>
                    <SmallText>
                        {"ایمیل: " + user.email}
                    </SmallText>
                </Detail>
                <Detail>
                    <Icon src={v5} alt={"phone"}/>
                    <SmallText>
                        {"شماره موبایل: " + user.mobile}
                    </SmallText>
                </Detail>
                <Detail>
                    <Icon src={v6} alt={"birth"}/>
                    <SmallText>
                        {"تاریخ تولد: " + (user.birthday ? user.birthday : "--/--/----")}
                    </SmallText>
                </Detail>
            </Details>
            <Buttons>
                <Button className={"purple-btn"}>مشاهده و ویرایش</Button>
                <Button className={"red-btn"}>حذف</Button>
            </Buttons>
        </Content>
    );
}

const Content = styled.div`
  border: 1px solid rgba(222, 222, 222);
  border-radius: 10px;
  display: flex;
  justify-content: start;
  align-items: center;
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
const Right = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 16px;
  @media only screen and (max-width: 610px) {
    flex-direction: column;
    justify-content: center;
    text-align: center;
  }
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
  flex-direction: row;
  flex-wrap: nowrap;
  width: 70%;

  @media only screen and (max-width: 610px) {
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 15px;
  }
`;
const Detail = styled.div`
  display: flex;
  width: 100%;
  justify-content: start;
  flex-wrap: nowrap;
  align-items: center;
  color: #7d7d7d;
  gap: 5px;
  @media only screen and (max-width: 610px) {

    justify-content: center;
  }
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
`;

export default UserList;