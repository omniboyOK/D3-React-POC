import React from "react";
import styled from "styled-components";

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: calc(10px + 2vmin);
  color: white;
`;

const Header = ({ title, subtitle }) => (
  <StyledHeader className="App-header">
    <h1>{title}</h1>
    <h3>{subtitle}</h3>
  </StyledHeader>
);

export default Header;
