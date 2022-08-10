import styled, {keyframes} from "styled-components";
import Text from "../Text";

const FeatureItem = (props) => {
    return (
        <Content className={"mx-4"} selected={props.selected} onClick={() => props.setSelected(props.index - 1)}>
            <Right className={props.selected ? "selected" : ""}>
                {props.index}
            </Right>
            <Left>
                <SmallContent selected={props.selected}>
                    {props.title}
                </SmallContent>
                <SmallText selected={props.selected}>
                    {props.text}
                </SmallText>
            </Left>
        </Content>
    );
}

const anim = keyframes`
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-20px);
  }
  100% {
    transform: translateY(0);
  }
`;

const Content = styled.div`
  background: ${props => props.selected ? "#29509d" : "rgba(249, 250, 251)"};
  display: flex;
  justify-content: space-around;
  align-items: center;
  padding: 24px 40px;
  border-radius: 10px;
  transition: all .5s ease-out;
  cursor: pointer;

  .selected {
    animation-name: ${anim};
    animation-duration: 1.5s;
    animation-timing-function: cubic-bezier(.94, .23, .15, .88);
    animation-iteration-count: infinite;
  }

  &:hover {
    transform: ${props => !props.selected ? "rotateZ(3deg)" : ""};
  }

  &:not(:last-child) {
    margin-bottom: 1.5rem;
  }
`;
const Right = styled.div`
  border-radius: 500px;
  margin-left: 20px;
  width: 48px;
  height: 48px;
  flex: 0 0 auto;
  display: flex;
  justify-content: center;
  align-items: center;
  background: ${props => props.selected ? "white" : "#f3f4f6"};
  color: rgba(41, 80, 157);
  font-weight: 700;
  @media(max-width: 370px){
    display: none;
  }

`;
const Left = styled.div``;
const SmallContent = styled.div`
  color: ${props => props.selected ? "white" : "#212529"};
  font-weight: 700;
`;
const SmallText = styled(Text)`
  margin-top: 0.5rem;
  font-size: 14px;
  color: ${props => props.selected ? "white" : "#4b5563"}
`;


export default FeatureItem;