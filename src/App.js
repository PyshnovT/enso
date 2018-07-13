import React from "react";
import styled from "styled-components";

import Helmet from "react-helmet";

import Navigation from "./Navigation";
import MainPage from "./Screens/MainPage";
import Modal from "./ui/modal";
import Help from "./Screens/Help";
import Contact from "./Screens/Contact";

const Main = styled.main`
  font-family: "Muller", sans-serif;

  background: #f7f5f5 url('${require("./assets/background.png")}') 0% 100% no-repeat;
  background-size: 100% auto; 
  background-attachment: fixed;
`;

class App extends React.Component {
  state = {
    showHelp: false,
    showForm: false
  };

  onHelpClick = () => {
    this.setState(prevState => ({ showHelp: !prevState.showHelp }));
  };

  onContactClick = () => {
    this.setState(prevState => ({ showForm: !prevState.showForm }));
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
        <Navigation
          onHelpClick={this.onHelpClick}
          hidden={this.state.showForm}
        />
        {this.state.showHelp ? (
          <Modal>
            <Help />
          </Modal>
        ) : null}
        {this.state.showForm ? (
          <Modal>
            <Contact onClose={this.onContactClick} />
          </Modal>
        ) : null}
        <MainPage onFormClick={this.onContactClick} />
      </Main>
    );
  }
}

export default App;
