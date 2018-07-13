import React from "react";
import styled from "styled-components";

import { H2, H3 } from "../utils";
import { MainButton } from "../ui/mainButton";
import { Link } from "../ui/link";

const Type = H3.extend`
  margin-bottom: 1rem;

  font-size: 0.875rem;
  line-height: 1rem;
  color: #a7a7a7;

  @media only screen and (min-width: 62rem) {
    margin-bottom: 1.125rem;
    font-size: 1.125rem;
    line-height: 1.375rem;
  }
`;

const Name = H2.extend`
  margin-bottom: 0.75rem;

  font-size: 2rem;
  line-height: 2.375rem;
  color: #282828;

  @media only screen and (min-width: 62rem) {
    margin-bottom: 1.25rem;

    font-size: 4rem;
    line-height: 4.75rem;
  }
`;

const About = styled.span`
  display: inline-block;
  margin-bottom: 4rem;

  font-size: 1.125rem;
  line-height: 1.5rem;
  color: #111;

  @media only screen and (min-width: 62rem) {
    margin-bottom: 4rem;

    font-size: 2.25rem;
    line-height: 2.625rem;
  }
`;

const AboutSign = styled.span`
  color: #ef372b;
`;

const More = styled.div`
  display: flex;

  flex-direction: column;
  justify-content: center;
  align-items: center;

  @media only screen and (min-width: 62rem) {
    flex-direction: row;
    justify-content: flex-start;
  }
`;

const AdditionalsButton = MainButton.extend`
  font-size: 0.875rem;

  @media only screen and (min-width: 62rem) {
    margin-right: 2rem;
    font-size: 1.125rem;
  }
`;

const LinkWrapper = styled.span`
  margin-top: 1.75rem;

  font-size: 1rem;
  line-height: 1.2rem;
  color: #282828;

  @media only screen and (min-width: 62rem) {
    margin: 0;
  }
`;

export default ({ type, name, about, aboutSign, website, onFormClick }) => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-xs-12">
          <Type>{type}</Type>
          <Name>{name}</Name>
          <About>
            <AboutSign>{aboutSign}</AboutSign> {about}
          </About>
          <More>
            <AdditionalsButton type="button" onClick={onFormClick}>
              Получить подробности
            </AdditionalsButton>
            {website ? (
              <LinkWrapper>
                Сайт —{" "}
                <Link href={"https://" + website} target="_blank">
                  {website}
                </Link>
              </LinkWrapper>
            ) : null}
          </More>
        </div>
      </div>
    </div>
  );
};
