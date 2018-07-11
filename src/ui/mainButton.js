import styled from "styled-components";

export const MainButton = styled.button`
  box-sizing: border-box;
  margin: 0;

  padding: 0;
  padding-left: 2rem;
  padding-right: 2rem;

  font-size: 1rem;
  line-height: 3.125rem;
  font-weight: 400;

  color: white;

  border: none;
  border-radius: 2rem;
  background-color: #ef372b;
  box-shadow: 0px 10px 35px 0 rgba(239, 55, 43, 0.24);
  cursor: pointer;
  outline: none;

  transition: 0.3s ease-out;

  :hover {
    background-color: #df271b;
  }

  :active {
    backround-color: #ef372b;
    box-shadow: none;
  }

  @media only screen and (min-width: 62rem) {
    font-size: 1.125rem;
    line-height: 4rem;
  }
`;
