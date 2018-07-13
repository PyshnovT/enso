import React from "react";
import styled from "styled-components";

import Page from "./Page";
import ContactForm from "./ContactForm";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  overflow: scroll;

  text-align: center;


  background-color: white;
  z-index: 1100;
  // transition: all 550ms ease-out;
  // transform: translate3d(0px, ${props => props.offset}px, 0px);

  @media only screen and (min-width: 62rem) {
    flex-wrap: wrap;
    text-align: left;
  }

`;

const CloseButton = styled.button`
  position: absolute;
  top: 1rem;
  right:1rem;
  margin: 0;
  padding: 0;

  width: 1.875rem;
  height: 1.875rem;


  background: transparent url('${require("../assets/close.svg")}') 50% 50% no-repeat;
  border: none;
  outline: none;
  cursor: pointer;

  @media only screen and (min-width: 62rem) {
    top: 4rem;
    right: 6rem;
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

export default class Contact extends React.Component {
  onSend = () => {};
  render() {
    return (
      <Container>
        <Block name="form">
          <Page>
            <CloseButton onClick={this.props.onClose} />
            <ContactForm />
          </Page>
        </Block>
      </Container>
    );
  }
}
