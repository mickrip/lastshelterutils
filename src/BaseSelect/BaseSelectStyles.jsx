import React from "react";
import styled from "styled-components";

export default styled.div`
  padding-top: 8px;
  padding-bottom: 8px;

  .nb-button {
    cursor: pointer;
    background: #282c34;
    color: white;
    padding: 8px 16px;
    border: none;
    outline: none;
    span {
      margin-left: 8px;
      font-size: 120%;
    }
  }
`;

export const BaseSelectModalStyle = styled.div`
  h2 {
    margin-top: 36px;
  }
  .baselevel-select {
    &:hover {
      color: red;
      cursor: pointer;
    }
    line-height: 25px;
  }
`;
