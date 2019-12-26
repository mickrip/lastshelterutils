import React from "react";
import styled from "styled-components";

export default styled.div`
  font-weight: ${props => (props.current ? "bold" : "normal")};
`;
