import React from "react";
import styled from "styled-components";

import { H2 } from "../utils";
import { MainButton } from "../ui/mainButton";

const Title = H2.extend`
  margin-bottom: 1.5rem;

  font-size: 2rem;
  line-height: 2.5rem;
  font-weight: 500;

  color: #ef372b;

  @media only screen and (min-width: 62rem) {
    margin-bottom: 2rem;

    font-size: 4rem;
    line-height: 4.25rem;
  }
`;

const About = styled.span`
  display: inline-block;
  margin-bottom: 4rem;

  font-size: 1.125rem;
  line-height: 1.5rem;
  font-weight: 500;

  color: #282828;

  @media only screen and (min-width: 62rem) {
    margin-bottom: 6rem;

    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`;

const More = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 62rem) {
    justify-content: flex-start;
  }
`;

const AdditionalsButton = MainButton.extend`
  @media only screen and (min-width: 62rem) {
    margin-right: 2rem;
  }
`;

const Arrow = styled.span`
  position: relative;
  top: 1px;
  display: inline-block;
  margin-left: 0.25rem;

  :after {
    content: "→";
  }

  @media only screen and (min-width: 62rem) {
    :after {
      content: "↓";
    }
  }
`;

export default ({ title, about }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <Title>{title}</Title>
          <About>{about}</About>
          <More>
            <AdditionalsButton type="button">
              Смотреть кейсы <Arrow />
            </AdditionalsButton>
          </More>
        </div>
      </div>
    </div>
  );
};
