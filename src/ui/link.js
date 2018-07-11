import styled from "styled-components";

export const Link = styled.a`
  position: relative;
  padding-bottom: 2px;
  color: #282828;
  text-decoration: none;

  border-bottom: 1px solid #282828;

  transition: 0.1s ease-out;

  :hover {
    color: #df271b;
    border-color: #df271b;
  }

  :active {
    transition: 0s ease-out;
    border-color: transparent;
  }
`;
