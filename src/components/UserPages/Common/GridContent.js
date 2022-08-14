import styled from "styled-components";
import c2 from "../../../assets/images/c2.svg";
import c1 from "../../../assets/images/c1.svg";
import c3 from "../../../assets/images/c3.svg";
import c4 from "../../../assets/images/c4.svg";
import {useNavigate} from "react-router-dom";

const GridContent = ({item, channel}) => {
    const navigate = useNavigate();
    return (
        <Content>
            <ImagePlace>
                <Span className={"span"}>وضعیت لیست پخش در حال به روز رسانی</Span>
                <Image className={"image"} src={item.poster.img} alt={item.poster.alt}/>
            </ImagePlace>
            <Container>
                <Title>{item.title}</Title>
                <Text>{item.channel_name}</Text>
                <Details>
                    <Detail>
                        <Icon src={channel ? c4 : c1} alt={channel ? "playlist" : "comment"}/>
                        <SmallText>{!channel ? (item.comments_count + " نظر") : "تعداد لیست پخش: " + item.playlist}</SmallText>
                    </Detail>
                    <Detail>
                        <Icon src={c2} alt={"author"}/>
                        <SmallText>{item.user_name}</SmallText>
                    </Detail>
                    {!channel ? <Detail>
                        <Icon src={c3} alt={"comment"}/>
                        <SmallText>{item.media_count} محتوا</SmallText>
                    </Detail> : ""}
               </Details>
               <ButtonPlace>
                   <Button onClick={() => navigate(`/admin/playlist/${item.id}`)}>
                       {channel ? "مشاهده اطلاعات کانال" : "مشاهده محتوا"}
                   </Button>
               </ButtonPlace>
           </Container>
        </Content>
    );
}

const Content = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  padding: 5px;
  background: white;
  border-radius: 15px;
  overflow: hidden;
  &:hover .image{
    transform: scale(1.2);
  }
  &:hover .span{
    visibility: visible;
    opacity: 1;
  }
`;
const Span = styled.span`
  position: absolute;
  background: #fbbf24;
  font-size: 12px;
  color: white;
  transition: all .5s;
  padding: 6px 10px;
  bottom: 10px;
  z-index: 9999;
  right: 15px;
  opacity: 0;
  border-radius: 5px;
  visibility: hidden;
`;
const Container = styled.div`
    padding: 6px 16px;
  display: flex;
  justify-content: center;
  align-items: start;
  flex-direction: column;
  width: 100%;
`;
const ImagePlace = styled.div`
  position: relative;
  height: 200px;
  width: 100%;
  overflow: hidden;
  border-radius: 15px;
`;
const Image = styled.img`
  height: 100%;
  width: 100%;
  background-position: center;
  object-fit: cover;
  border-radius: 15px;
  transition: all .7s ease-in-out;
`;
const Title = styled.h1`
  overflow: hidden;
 white-space: nowrap;
  text-overflow: ellipsis;
  width: 100%;
  color: #29509d;
  font-size: 20px;
  font-weight: 700;
  margin-top: 15px;
`;
const Text = styled.h3`
  color: #bcbcbc;
  font-size: 14px;
`;
const Details = styled.div`
  margin-top: 10px;
  display: flex;
  justify-content: start;
  gap: 10px;
  width: 100%;
  align-items: center;
  padding: 0 12px;
`;
const Detail = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
const Icon = styled.img``;
const SmallText = styled.div`
    color: #7d7d7d;
  font-size: 12px;
  padding: 0 6px;
`;
const ButtonPlace = styled.div`
    width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 12px;
  margin-bottom: 6px;
`;
const Button = styled.button`
  margin-top: 12px;
  padding: 6px 12px;
  font-size: 14px;
  background: #29509d;
  width: 100%;
  border: none;
  outline: none;
  color: white;
  border-radius: 5px;
  
  transition: all .3s;
  &:hover{
    background: #7ac3f0;
  }
`;

export default GridContent;