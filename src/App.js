import React from "react";
import styled from "styled-components";

import Helmet from "react-helmet";
import { SectionsContainer, Section } from "react-fullpage";

import Page from "./Screens/Page";
import CompanyPage from "./Screens/CompanyPage";
import StarterPage from "./Screens/StarterPage";
import Navigation from "./Navigation";

const Main = styled.main`
  font-family: "Muller", sans-serif;
  background-color: #f7f5f5;
`;

const Container = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  overflow: scroll;

  text-align: center;

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

var blocks = [
  {
    id: "villagio",
    type: "ЗАСТРОЙЩИК",
    name: "Villagio Estate",
    aboutSign: "+450",
    about: "млн к выручке за год"
  },
  {
    id: "townhouse",
    type: "АГЕНСТВО НЕДВИЖИМОСТИ",
    name: "Townhouse.expert",
    aboutSign: "№1",
    about: "по продажам элитных таунхаусов",
    website: "townhouse.expert"
  },
  {
    id: "rotenstein",
    type: "СТРОИТЕЛЬНАЯ КОМПАНИЯ",
    name: "Rotenstein",
    aboutSign: "+30",
    about: "млн к среднему чеку",
    website: "rotenstein.ru.com"
  }
];

function App() {
  let options = {
    sectionClassName: "section",
    anchors: ["sectionOne", "sectionTwo", "sectionThree"],
    scrollBar: false,
    navigation: true,
    verticalAlign: false,
    sectionPaddingTop: "50px",
    sectionPaddingBottom: "50px",
    arrowNavigation: true
  };
  return (
    <Main>
      <Helmet>
        <title>ENSO</title>
      </Helmet>
      <Navigation />
      <Container>
        <Block name="whoweare">
          <Page>
            <StarterPage
              title={"Увеличиваем продажи в недвижимости"}
              about="За счет упаковки и рекламы, которые приносят деньги"
            />
          </Page>
        </Block>
        {blocks.map((block, index) => (
          <Block name={block.id} key={block.id}>
            <Page>
              <CompanyPage
                type={block.type}
                name={block.name}
                aboutSign={block.aboutSign}
                about={block.about}
                website={block.website}
              />
            </Page>
          </Block>
        ))}
      </Container>
    </Main>
  );
}

export default App;
