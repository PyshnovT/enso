import React from "react";
import styled, { css } from "styled-components";

import { H2 } from "../../utils";
import { MainButton } from "../../ui/mainButton";
import { PropTypes } from "prop-types";

const Container = styled.div`
  position: relative;

  top: 1rem;

  @media only screen and (min-width: 62rem) {
    top: 0;
  }
`;

const Title = H2.extend`
  margin-bottom: 2rem;

  font-size: 1.25rem;
  line-height: 1.5rem;
  font-weight: 500;

  color: #2828282;

  @media only screen and (min-width: 62rem) {
    margin-bottom: 5rem;

    font-size: 3rem;
    line-height: 3.5rem;
  }
`;

const QuestionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

  // padding-left: 1.25rem;
  // padding-right: 1.25rem;

  font-size: 1rem;
  line-height: 1.5rem;

  color: #282828;

  @media only screen and (min-width: 62rem) {
    justify-content: flex-start;
    flex-direction: row;

    padding: 0;

    font-size: 1.75rem;
    line-height: 2rem;
  }
`;

const QuestionCount = styled.span`
  margin-bottom: 0.5rem;
  color: #ef372b;

  @media only screen and (min-width: 62rem) {
    position: relative;
    top: 2px;

    margin-bottom: 0;
    margin-right: 1.5rem;
  }
`;

const Question = styled.span`
  display: inline-block;

  margin-bottom: 1rem;

  font-size: 1.125rem;
  line-height: 1.5rem;

  @media only screen and (min-width: 62rem) {
    margin-bottom: 1.25rem;

    font-size: 1.875rem;
    line-height: 2.25rem;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;

  margin: 0;
  padding: 0;
  padding-left: 1rem;
  padding-right: 1rem;

  @media only screen and (min-width: 62rem) {
    justify-content: flex-start;

    margin-left: -0.5rem;
    margin-right: -0.5rem;
    padding: 0;
  }
`;

const InputContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;

  margin-bottom: 1rem;

  transition: 0.3s ease-out;
  box-shadow: 0px 8px 10px 0 rgba(0, 0, 0, 0.04);
  background-color: white;

  :hover {
    box-shadow: 0px 8px 10px 0 rgba(0, 0, 0, 0.08);
  }

  @media only screen and (min-width: 62rem) {
    margin: 0;
    padding-right: 2rem;
  }
`;

const Input = styled.input`
  box-sizing: border-box;
  margin: 0;

  padding-top: 0.875rem;
  padding-bottom: 0.875rem;
  padding-left: 0.75rem;
  padding-right: 0.75rem;

  width: 100%;

  font-weight: 400;
  font-size: 1rem;
  line-height: 1.25rem;
  color: #282828;

  outline: none;
  border: none;

  @media only screen and (min-width: 62rem) {
    margin: 0;
    padding-top: 1rem;
    padding-bottom: 1rem;
    padding-left: 1.5rem;
    padding-right: 1.5rem;

    font-size: 1.5rem;
    line-height: 2rem;
  }

  ::placeholder {
    color: #c6c6c6;
  }
`;

const InputSkipButton = styled.button`
  display: none;
  margin: 0;
  padding: 0;

  margin-left: 1.5rem;

  font-size: 1.125rem;
  color: #bebab9;

  background-color: transparent;
  border: none;
  outline: none;
  cursor: pointer;

  @media only screen and (min-width: 62rem) {
    display: inline-block;

    ${props =>
      props.hide &&
      css`
        display: none;
      `};
  }
`;

const MobileSkipButton = styled.button`
  margin: 0;
  margin-top: 3rem;
  padding: 0;

  font-size: 0.875rem;
  line-height: 1rem;
  color: #bebab9;
  background-color: transparent;
  border: none;
  outline: none;

  @media only screen and (min-width: 62rem) {
    display: none;
  }
`;

const NextButton = MainButton.extend`
  box-sizing: border-box;

  width: 100%;

  @media only screen and (min-width: 62rem) {
    margin-left: 1rem;
    padding-left: 2.25rem;
    padding-right: 2.25rem;

    width: auto;
  }
`;

const Arrow = styled.span`
  position: relative;
  top: 1px;

  display: inline-block;
  margin-left: 0.25rem;

  // width: 17px;
  // height: 10px;

  :after {
    content: "→";
  }
  // background: transparent url('${require("../../assets/arrow_right.svg")}') 50% 50% no-repeat;
`;

let questions = [
  "Как называется ваша компания?",
  "Сколько в месяц вы тратите на рекламу?",
  "Сколько целевых заявок вы получаете в месяц?",
  "Какой измеримый результат вы хотите получить через месяц?"
];

class Questions extends React.Component {
  state = {
    index: 0,
    answers: [],
    inputValue: ""
  };

  sendForm = () => {
    console.log(this.state.answers);
    this.props.onAnswer();
  };

  onSkipClick = () => {
    let answer = "";
    var answers = this.state.answers;

    answers.push(answer);
    this.setState({ answers: answers });

    if (this.state.index >= questions.length - 1) {
      this.sendForm();
      return;
    }

    this.setState(prevState => ({
      index: prevState.index + 1,
      inputValue: ""
    }));

    this.input.focus();
  };

  onNextClick = () => {
    let answer = this.input.value;
    var answers = this.state.answers;

    answers.push(answer);
    this.setState({ answers: answers });

    console.log(answers);

    if (this.state.index >= questions.length - 1) {
      this.sendForm();
      return;
    }

    this.setState(prevState => ({
      index: prevState.index + 1,
      inputValue: ""
    }));

    this.input.focus();
  };

  onChange = e => {
    this.setState({ inputValue: e.target.value });
  };

  componentDidMount() {}

  render() {
    let index = this.state.index;
    let length = questions.length;

    let last = index === length - 1;

    return (
      <Container className="container">
        <div className="row">
          <div className="col-xs-12">
            <Title>
              Ответьте на вопросы, чтобы получить коммерческое предложение
            </Title>
            <QuestionWrapper>
              <QuestionCount>
                {1 + this.state.index} из {questions.length}
              </QuestionCount>
              <Question>Как называется ваша компания? </Question>
            </QuestionWrapper>
            <Form>
              <div className="col-xs-12 col-lg-8">
                <InputContainer>
                  <Input
                    type="text"
                    innerRef={node => (this.input = node)}
                    value={this.state.inputValue}
                    placeholder="Ввести"
                    onChange={this.onChange}
                  />
                  <InputSkipButton
                    type="button"
                    hide={last}
                    onClick={this.onSkipClick}
                  >
                    Пропустить
                  </InputSkipButton>
                </InputContainer>
              </div>
              <div className="col-xs-12 col-lg-4">
                <NextButton type="button" onClick={this.onNextClick}>
                  Следующий
                  <Arrow />
                </NextButton>
              </div>
              <div className="col-xs-12">
                <MobileSkipButton
                  type="button"
                  hide={last}
                  onClick={this.onSkipClick}
                >
                  Пропустить вопрос
                </MobileSkipButton>
              </div>
            </Form>
          </div>
        </div>
      </Container>
    );
  }
}

Questions.propTypes = {
  onAnswer: PropTypes.func.isRequired
};

export default Questions;
