import React from "react";
import DashboardCard from "./DashboardCard/DashboardCard";
import styled from "styled-components";

const DashBoard = (props) => {
    return(
        <>
            <DashboardContainer className="pl-4">
                <DashboardCard />
            </DashboardContainer>
        </>
    );
}

const DashboardContainer = styled.div`
  padding-right: 30px;
    display: grid;
  grid-template-columns: repeat(auto-fit,minmax(600px,1fr));
  @media only screen and (max-width: 740px){
    grid-template-columns: 100%;
  }
  grid-template-rows: auto;
  column-gap: 70px;
  row-gap: 10px;
`;

export default DashBoard;