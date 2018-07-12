import React from "react";
import styled from "styled-components";

import { PropTypes } from "prop-types";

const Wrapper = styled.div`
  position: fixed;
  bottom: 2rem;
  left: 0;
  right: 0;
  height: 1rem;

  display: flex;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 62rem) {
    right: 2rem;
    top: 0;

    bottom: 0;
    left: initial;
    width: 1rem;
    height: auto;
  }
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;

  @media only screen and (min-width: 62rem) {
    flex-direction: column;
  }
`;

const Dot = styled.span`
  display: inline-block;
  margin-right: 1rem;
  width: 1rem;
  height: 1rem;

  border-radius: 0.5rem;
  transition: background-color 0.5s ease-out;

  background-color: ${props => (props.current ? "#A8A19F" : "#e5e5e5")};

  @media only screen and (min-width: 62rem) {
    margin-bottom: 1rem;
  }

  &:last-child {
    margin: 0;
  }
`;

class Paging extends React.Component {
  render() {
    var dots = [];
    for (var i = 0; i < this.props.count; i++) {
      dots.push(<Dot current={i === this.props.currentIndex} />);
    }

    return (
      <Wrapper>
        <Container>{dots}</Container>
      </Wrapper>
    );
  }
}

Paging.propTypes = {
  count: PropTypes.number,
  currentIndex: PropTypes.number
};

export default Paging;
