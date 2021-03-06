import React from "react";
import styled from "styled-components";

import Page from "../Page";
import Question from "./Question";
import ContactForm from "../ContactForm";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  overflow: scroll;

  text-align: center;

  // transition: all 550ms ease-out;
  // transform: translate3d(0px, ${props => props.offset}px, 0px);

  @media only screen and (min-width: 62rem) {
    flex-wrap: wrap;
    text-align: left;
  }

`;

const BlockWrapper = styled.div`
  max-width: 100%;
  flex-basis: 100%;
`;

const Block = props => {
  return (
    <BlockWrapper id={props.name} name={props.name}>
      {props.children}
    </BlockWrapper>
  );
};

export default class Help extends React.Component {
  state = {
    sent: false
  };

  onAnswer = () => {
    this.setState({ sent: true });
  };

  render() {
    return (
      <Container>
        <Block name="questions">
          <Page>
            {this.state.sent ? (
              <ContactForm />
            ) : (
              <Question onAnswer={this.onAnswer} />
            )}
          </Page>
        </Block>
      </Container>
    );
  }
}
