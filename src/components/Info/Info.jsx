import React from "react";
import styled from "styled-components";

const StyledInfo = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 1em;
  color: grey;
`;

const Info = ({ text }) => (
  <StyledInfo>
    <p>{text}</p>
  </StyledInfo>
);

export default Info;
