import React from "react";
import styled from "styled-components";

export default styled.div`
  vertical-align: top;

  display: ${props => (props.block ? "block" : "inline-block")};
`;
