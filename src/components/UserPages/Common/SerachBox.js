import SearchIcon from '@mui/icons-material/Search';
import ViewListIcon from '@mui/icons-material/ViewList';
import ViewModuleIcon from '@mui/icons-material/ViewModule';
import styled from "styled-components";
import {useState} from "react";

const SearchBox = ({isList, setIsList, title, btnText, hidden, placeHolder, btnHidden, setUrl, url, refetch}) => {
    const [text, setText] = useState("");

    return (
        <Box>
            <Title>{title}</Title>
            <Middle>
                <InputGroup>
                    <Icon><SearchIcon/></Icon>
                    <Input placeholder={placeHolder} value={text} onChange={(e) => setText(e.target.value)}></Input>
                </InputGroup>
                <Button
                    className={"s-btn"}
                    onClick={() => {
                        console.log(url)
                        if (text === "" || !text) {
                            setUrl(url.substring(0, url.lastIndexOf("=") + 1))
                        } else {
                            setUrl(url + text);
                        }
                        setTimeout(() => refetch(), 70)

                    }}
                >جستجو</Button>
                <Views>
                    {hidden ? "" :
                        <>
                            <Img
                                className={`${!isList ? "selected" : ""}`}
                                onClick={() => setIsList(false)}
                            >
                                <ViewModuleIcon sx={{fontSize: "30px"}}/>
                            </Img>
                            <Img className={`${isList ? "selected" : ""}`} onClick={() => setIsList(true)}><ViewListIcon
                                sx={{fontSize: "30px"}}/></Img>
                        </>
                    }
                </Views>
            </Middle>
            {!btnHidden?<Button>{btnText}</Button>:""}
        </Box>
    );
}

const Box = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: start;
  @media only screen and (max-width: 450px) {
    .s-btn {
      display: none;
    }
  }
`;
const Title = styled.h1`
  color: rgba(41, 80, 157);
  font-size: 1.5rem;
  font-weight: 700;
  margin-bottom: 20px;
`;
const Middle = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  gap: 10px;
  margin-bottom: 15px;
`;
const InputGroup = styled.div`
  display: flex;
  justify-content: start;
  align-items: center;
  background: white;
  border-radius: 10px;
  color: rgba(151, 143, 143);
  padding: 3px 15px;
  border: 3px solid transparent;

  &:focus-within {
    border: 3px solid rgba(41, 80, 157);
  }
`;
const Icon = styled.div`
  padding: 0 3px 0 5px;
`;
const Input = styled.input`
  border: none;
  outline: none;
  background: transparent;
  width: 480px;
  @media only screen and (max-width: 867px) {
    max-width: 230px;
    width: 100%;
  }
  font-size: 14px;
  color: rgba(151, 143, 143);

  &::placeholder {
    color: rgba(151, 143, 143, .9);
  }
`;
const Button = styled.button`
  background: rgba(41, 80, 157);
  border: none;
  outline: none;
  color: white;
  font-size: 14px;
  line-height: 1.25rem;
  padding: 6px 12px;
  border-radius: 5px;
  transition: all ease 0.5s;

  &:hover {
    background: rgba(122, 195, 240);
  }
`;
const Views = styled.div`
  flex: 0 0 auto;
  display: flex;
  justify-content: start;
  align-items: center;
  border-radius: 10px;
  overflow: hidden;

  .selected {
    background-color: #e5e7eb;
  }
`;
const Img = styled.div`
  background: white;
  padding: 5px;
  color: rgba(41, 80, 157);

  svg {
    @media only screen and (max-width: 350px) {
      font-size: 20px;
    }
  }
`;

export default SearchBox;