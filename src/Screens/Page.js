import React from "react";
import styled from "styled-components";

const Wrapper = styled.section`
  display: flex;
  box-sizing: border-box;

  padding-left: 0rem;
  padding-right: 0rem;

  align-items: center;
  height: 100vh;
  width: ${props => props.width}px;

  @media only screen and (min-width: 370px) {
    padding-left: 2rem;
    padding-right: 2rem;
  }

  @media only screen and (min-width: 62rem) {
    padding-left: 4rem;
    padding-right: 4rem;
    width: auto;
  }
`;

export default class Page extends React.Component {
  constructor(props) {
    super(props);
    this.state = { width: 0, height: 0 };
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  };

  render() {
    return <Wrapper width={this.state.width}>{this.props.children}</Wrapper>;
  }
}
