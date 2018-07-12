import React from "react";
import styled from "styled-components";

const Container = styled.div`
  position: fixed;

  top: 0;
  left: 0;
  width: 100%;
  height: 100%;

  background-color: #f7f5f5;
  z-index: 50;
`;

const PageWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  overflow-y: scroll;

  // display: flex;
  // align-items: flex-start;
  // justify-content: center;
`;

const ModalView = styled.div`
  position: relative;
  z-index: 1010;

  width: 100%;
  height: 100%;

  // @media only screen and (min-width: 992px) {
  //   margin-top: 100px;
  //   margin-bottom: 100px;

  //   max-width: 570px;
  //   height: auto;

  //   background-color: white;
  // }
`;

export default props => {
  return (
    <Container>
      <PageWrapper>
        <ModalView>{props.children}</ModalView>
      </PageWrapper>
    </Container>
  );
};
