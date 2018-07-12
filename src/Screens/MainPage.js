import React from "react";
import styled from "styled-components";

// import { SectionsContainer, Section } from "react-fullpage";

import Page from "./Page";
import CompanyPage from "./CompanyPage";
import StarterPage from "./StarterPage";
import Paging from "../ui/paging";

const Container = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  flex-wrap: nowrap;

  overflow: hidden;

  text-align: center;

  transition: all 550ms ease-out;
  transform: translate3d(0px, ${props => props.offsetY}px, 0px);

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

let breakpoint = 992;

class MainPage extends React.Component {
  state = {
    offsetY: 0,
    offsetX: 0,
    page: 0,
    timestamp: 0,
    lastDelta: 0
  };

  componentDidMount() {
    window.addEventListener("mousewheel", this.updateScroll);
    window.addEventListener("DOMMouseWheel", this.updateScroll);

    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  componentWillUnmount() {
    window.removeEventListener("mousewheel", this.updateScroll);
    window.removeEventListener("DOMMouseWheel", this.updateScroll);

    window.removeEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions = () => {
    let width = window.innerWidth;
    let height = window.innerHeight;

    this.container.scrollLeft = 0;
    this.mobile = width < breakpoint;
    this.lastDelta = 0;

    if (width < breakpoint && this.width >= breakpoint) {
      // set mobile

      this.setState({
        offsetY: 0,
        offsetX: 0,
        page: 0
      });
    } else if (width >= breakpoint && this.width < breakpoint) {
      // set desktop

      this.setState({
        offsetY: 0,
        offsetX: 0,
        page: 0
      });
    }

    this.width = width;
    this.height = height;
  };

  dimensionLength = () => {
    return this.mobile ? this.width : this.height;
  };

  updateScroll = event => {
    let delta = this.mobile ? event.deltaX : event.deltaY;
    let next = delta > 0;
    let page = this.state.page;
    let timestamp = this.state.timestamp;
    let eventTimestamp = event.timeStamp;
    let lastDelta = this.lastDelta || 0;
    let newDelta = delta;

    if (eventTimestamp - 550 < timestamp) {
      this.lastDelta = newDelta;
      return;
    } else {
      //
      if (Math.abs(newDelta) <= Math.abs(lastDelta)) {
        this.lastDelta = newDelta;
        return;
      } else {
      }
    }

    this.lastDelta = 0;

    var newPage = Math.min(3, page + (next ? 1 : -1));
    newPage = Math.max(0, newPage);

    let offset = newPage * -this.dimensionLength();

    this.setState({
      offsetY: this.mobile ? 0 : offset,
      offsetX: this.mobile ? offset : 0,
      page: newPage,
      timestamp: eventTimestamp
    });

    // this.container.scrollLeft = this.mobile ? -offset : 0;
    this.container.scroll({
      left: this.mobile ? -offset : 0,
      top: 0,
      behavior: "smooth"
    });
  };

  onContainerScroll = event => {
    event.preventDefault();
  };

  render() {
    return (
      <div>
        <Container
          offsetX={this.state.offsetX}
          offsetY={this.state.offsetY}
          innerRef={node => (this.container = node)}
          onScroll={this.onContainerScroll}
        >
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
        <Paging currentIndex={this.state.page} count={blocks.length + 1} />
      </div>
    );
  }
}

export default MainPage;
