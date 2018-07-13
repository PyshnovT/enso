import React from "react";
import styled from "styled-components";
import PropTypes from "prop-types";

const Container = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;

  display: ${props => (props.hidden ? "none" : "flex")};
  justify-content: space-between;

  padding-left: 1.25rem;
  padding-right: 1.25rem;

  background-color: #f7f5f5;
  border-bottom: 1px solid #e5e5e5;

  z-index: 100;

  @media only screen and (min-width: 62rem) {
    padding-left: 2.25rem;
    padding-right: 2.25rem;
  }
`;

const Logo = styled.div`
  width: 53px;
  height: 4rem;

  background: transparent url('${require("./assets/logo.svg")}') 50% 50% no-repeat;

  @media only screen and (min-width: 62rem) {
    height: 5rem;
    width: 70px;

    background: transparent url('${require("./assets/logo_big.svg")}') 50% 50% no-repeat;
    background-size: 100% auto;
  }
`;

const List = styled.ul`
  display: flex;

  flex-direction: row;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const Item = styled.li`
  position: relative;
  top: 2px;

  display: flex;
  align-items: center;
  margin-left: 1.25rem;
  margin-right: 1.25rem;

  font-size: 1rem;
  color: #282828;
  line-height: 4rem;

  &:last-child {
    margin-right: 0;
  }

  @media only screen and (min-width: 62rem) {
    line-height: 5rem;
  }
`;

const HelpItem = Item.extend`
  cursor: pointer;

  :before {
    position: relative;
    left: -1.25rem;
    top: -2px;
    display: inline-block;
    height: 1.5rem;
    width: 1px;
    background-color: #e5e5e5;
    content: "";
    // border-left: 1px solid #e5e5e5;
  }
`;

const Icon = styled.img`
  position: relative;
  top: -1px;
  display: inline-block;

  @media only screen and (min-width: 62rem) {
    display: inline-block;
    margin-right: 0.75rem;
  }
`;

const HelpText = styled.span`
  display: none;

  @media only screen and (min-width: 62rem) {
    display: inline-block;
  }
`;

export default class Navigation extends React.Component {
  onHelpClick = () => {
    this.props.onHelpClick();
  };

  render() {
    return (
      <Container hidden={this.props.hidden}>
        <Logo />
        <List>
          <Item>8 (495) 364-43-21</Item>
          <HelpItem onClick={this.onHelpClick}>
            <Icon src={require("./assets/conversation.svg")} />
            <HelpText>Получить консультацию</HelpText>
          </HelpItem>
        </List>
      </Container>
    );
  }
}

Navigation.propTypes = {
  onHelpClick: PropTypes.func.isRequired
};
