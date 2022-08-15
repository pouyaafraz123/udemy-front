import styled from "styled-components";
import GridContent from "../../Common/GridContent";
import ListContent from "../../Common/ListContent";


const PlaylistPage = ({data, isList}) => {


    return (
        <>{renderItems(data.list, isList)}</>
    );
}

const renderItems = (items, isList) => {
    if (isList)
        return renderList(items)
    return <GridContainer>{renderGrids(items)}</GridContainer>;
}

const renderList = (items) => {
    return items.map((item, index) => {
        return (
            <ListContent item={item} index={index} key={index}/>
        );
    });
}

const renderGrids = (items) => {
    return items.map((item, index) => {
        return (
            <GridContent item={item} key={index}/>
        );
    });
}


const GridContainer = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-template-rows: auto;
  grid-gap: 25px;

`;


export default PlaylistPage;