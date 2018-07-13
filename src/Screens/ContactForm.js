import React from "react";
import styled from "styled-components";

import { H2 } from "../utils";
import { MainButton } from "../ui/mainButton";

const Title = H2.extend`
  margin-bottom: 3rem;

  font-size: 1.5rem;
  line-height: 2rem;
  font-weight: 500;

  padding-left: 1rem;
  padding-right: 1rem;

  color: #2828282;
  white-space: pre-wrap;

  @media only screen and (min-width: 62rem) {
    margin-bottom: 3.75rem;
    padding: 0;

    font-size: 3rem;
    line-height: 3.5rem;
  }
`;

const RedDot = styled.span`
  color: #ef372b;
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0;
  // padding-left: 1rem;
  // padding-right: 1rem;

  @media only screen and (min-width: 62rem) {
    justify-content: flex-start;

    margin-left: -0.5rem;
    margin-right: -0.5rem;
    padding: 0;
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  margin: 0;
  margin-bottom: 0.75rem;

  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;

  width: 100%;

  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25rem;
  color: #282828;
  background-color: white;

  transition: 0.3s ease-out;
  outline: none;
  border: none;

  box-shadow: 0px 4px 10px 0 rgba(0, 0, 0, 0.12);

  :hover {
    box-shadow: 0px 4px 10px 0 rgba(0, 0, 0, 0.2);
  }

  @media only screen and (min-width: 62rem) {
    margin-bottom: 0;
    margin-right: 1rem;
    padding-top: 1.5rem;
    padding-bottom: 1.5rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    font-size: 1.125rem;
    line-height: 1.5rem;

    &:last-child {
      margin-right: 0;
    }
  }

  ::placeholder {
    color: #c6c6c6;
  }
`;

const Button = MainButton.extend`
  box-sizing: border-box;

  margin-top: 0.25rem;
  width: 100%;

  @media only screen and (min-width: 62rem) {
    margin-top: 0rem;
    margin-left: 0.75rem;
    padding-left: 2.25rem;
    padding-right: 2.25rem;

    width: auto;
  }
`;

const Bullshit = styled.span`
  margin-top: 2rem;

  font-size: 0.875rem;
  line-height: 1.25rem;
  color: #b7b7b7;
`;

const SignMark = styled.span`
  display: none;
  margin-right: 0.5rem;
  width: 0.25rem;
  height: 1rem;
   background: transparent url('${require("../assets/i.svg")}') 50% 100% no-repeat;

   @media only screen and (min-width: 62rem) {
display: inline-block;
   }
`;

const DataLink = styled.a`
  text-decoration: none;
  color: #b7b7b7;
  border-bottom: 1px solid #b7b7b7;
`;

const SentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media only screen and (min-width: 62rem) {
    // align-items: flex-start;
    flex-direction: row;
  }
`;

const SentImage = styled.div`

margin-bottom: 1.5rem;
width: 4rem;
height: 4rem;
background: transparent url('${require("../assets/sent.png")}') 50% 50% no-repeat;
background-size: 100% auto;

 @media only screen and (min-width: 62rem) {
   margin-right: 1.5rem;
   margin-bottom: 0;
width: 6rem;
height: 6rem;
 }
`;

const SentRightWrapper = styled.div`
  display: flex;
  flex-direction: column;

  justify-content: center;

  @media only screen and (min-width: 62rem) {
  }
`;

const SentTitle = styled.span`
  margin-bottom: 0.25rem;
  font-size: 1.25rem;
  line-height: 1.75rem;

  @media only screen and (min-width: 62rem) {
    margin-bottom: 0;
    font-size: 2.25rem;
    line-height: 3rem;
  }
`;

const SentCall = styled.span`
  font-size: 1rem;
  line-height: 1.25rem;

  @media only screen and (min-width: 62rem) {
    font-size: 1.5rem;
    line-height: 2rem;
  }
`;

export default class ContactForm extends React.Component {
  state = {
    sent: false
  };

  onSend = () => {
    this.setState({ sent: true });

    let name = this.nameInput.value;
    let phone = this.nameInput.value;
  };

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-lg-8">
            <Title>
              {"Оставьте свои \nданные — расскажем все лично"}
              <RedDot>.</RedDot>
            </Title>
          </div>
          <div className="col-xs-12">
            {!this.state.sent ? (
              <Form>
                <div className="col-lg-4">
                  <Input
                    type="text"
                    placeholder="Имя"
                    innerRef={node => (this.nameInput = node)}
                  />
                </div>
                <div className="col-lg-4">
                  <Input
                    type="text"
                    placeholder="Телефон"
                    innerRef={node => (this.phoneInput = node)}
                  />
                </div>
                <div className="col-lg-4">
                  <Button onClick={this.onSend} type="button">
                    Отправить
                  </Button>
                </div>
                <Bullshit className="col-xs-12">
                  <SignMark />
                  Нажимая на кнопку отправки, вы даете{" "}
                  <DataLink href="/">
                    согласие на обработку своих персональных данных
                  </DataLink>
                </Bullshit>
              </Form>
            ) : (
              <SentWrapper>
                <SentImage />
                <SentRightWrapper>
                  <SentTitle>Отправлено</SentTitle>
                  <SentCall>Ждите нашего звонка</SentCall>
                </SentRightWrapper>
              </SentWrapper>
            )}
          </div>
        </div>
      </div>
    );
  }
}
