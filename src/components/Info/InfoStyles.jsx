import React from "react";
import styled from "styled-components";

export default styled.div`
  .title {
    margin-bottom: 16px;
  }

  .cblock {
    margin-bottom: 8px;
  }
  h2 {
    color: #282c34;
    font-size: 25px;
    padding: 0;
    margin: 0;
    min-width: 400px;
  }

  p {
    padding: 0;
    margin: 0;
  }

  a {
    text-decoration: none;
    color: blue;
    &:hover {
      text-decoration: underline;
    }
  }

  hr {
    height: 1px;
    margin-top: 32px;
  }
`;
