import React from "react";
import styled from "styled-components";

// import { SectionsContainer, Section } from "react-fullpage";

import Page from "./Page";
import CompanyPage from "./CompanyPage";
import StarterPage from "./StarterPage";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  overflow: scroll;

  text-align: center;

  transition: all 550ms ease-out;
  transform: translate3d(0px, ${props => props.offset}px, 0px);

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

class MainPage extends React.Component {
  state = {
    offsetY: 0,
    page: 0,
    timestamp: 0,
    scrolling: false,
    lastDeltaY: 0
  };

  componentDidMount() {
    window.addEventListener("mousewheel", this.updateScroll);
    window.addEventListener("DOMMouseWheel", this.updateScroll);
  }

  componentWillUnmount() {
    window.removeEventListener("mousewheel", this.updateScroll);
    window.removeEventListener("DOMMouseWheel", this.updateScroll);
  }

  updateScroll = event => {
    let next = event.deltaY > 0;
    let page = this.state.page;
    let timestamp = this.state.timestamp;
    let eventTimestamp = event.timeStamp;
    let lastDeltaY = this.lastDeltaY || 0;
    let newDeltaY = event.deltaY;

    if (eventTimestamp - 550 < timestamp) {
      this.lastDeltaY = newDeltaY;
      return;
    } else {
      //
      if (Math.abs(newDeltaY) <= Math.abs(lastDeltaY)) {
        this.lastDeltaY = newDeltaY;
        return;
      } else {
      }
    }

    this.lastDeltaY = 0;

    var newPage = Math.min(3, page + (next ? 1 : -1));
    newPage = Math.max(0, newPage);

    this.setState({
      offsetY: newPage * -window.innerHeight,
      page: newPage,
      timestamp: eventTimestamp
      // scrolling: true
    });
  };

  render() {
    return (
      <Container offset={this.state.offsetY}>
        {/* <Background /> */}
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
    );
  }
}

export default MainPage;
