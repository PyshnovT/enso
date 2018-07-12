import React from "react";
import styled from "styled-components";

import Helmet from "react-helmet";

import Navigation from "./Navigation";
import MainPage from "./Screens/MainPage";
import Modal from "./ui/modal";
import Help from "./Screens/Help";
import { throws } from "assert";

const Main = styled.main`
  font-family: "Muller", sans-serif;
  background-color: #f7f5f5;
`;

class App extends React.Component {
  state = {
    showModal: false
  };

  onHelpClick = () => {
    this.setState(prevState => ({ showModal: !prevState.showModal }));
  };

  render() {
    return (
      <Main>
        <Helmet>
          <title>ENSO</title>
          {this.state.showModal ? (
            <style>{"body {overflow: hidden}"}</style>
          ) : null}
        </Helmet>
        <Navigation onHelpClick={this.onHelpClick} />
        {this.state.showModal ? (
          <Modal>
            <Help />
          </Modal>
        ) : null}
        <MainPage />
      </Main>
    );
  }
}

export default App;
