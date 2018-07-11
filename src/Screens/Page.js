import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;

  padding-left: 0rem;
  padding-right: 0rem;

  align-items: center;
  height: 100vh;

  @media only screen and (min-width: 370px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media only screen and (min-width: 62rem) {
    padding-left: 4rem;
    padding-right: 4rem;
  }
`;

export default props => {
  return <Wrapper>{props.children}</Wrapper>;
};
