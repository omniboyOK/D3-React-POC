import React from "react";
import styled from "styled-components";

const StyledFooter = styled.footer`
  display: flex;
  flex: 1,
  align-items: center;
  justify-content: center;
  font-size: 1em;
  color: white;
`;

const Footer = ({ credits }) => (
  <StyledFooter>
    <p>{credits}</p>
  </StyledFooter>
);

export default Footer;
