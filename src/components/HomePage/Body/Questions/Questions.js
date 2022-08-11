import React from "react";
import QuestionItems from "./QuestionItems/QuestionItems";
import styled from "styled-components";

const Questions = (props) => {
    return (
        <Accordion className="py-5" id="Questions">
            <div className="container pb-5">
                <h3 className="text-center pt-2 pb-4">سوالات متداول</h3>
                <div id="accordion" className="d-flex flex-column justify-content-center align-items-center">
                    <QuestionItems/>
                </div>
            </div>
        </Accordion>
    );
}

const Accordion = styled.div`
  background-color: #f9fafb;

  h3 {
    font-weight: 800;
    color: #29509d;
  }

  a {
    color: black;
    transition: all ease 0.5s;
  }

  a:hover , a:active {
    color: rgba(41, 80, 157);
  }
`;

export default Questions;