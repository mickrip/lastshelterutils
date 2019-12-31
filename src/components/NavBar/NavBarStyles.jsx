import React from "react";
import styled from "styled-components";

export default styled.div`
  background: #485e9e;

  h1 {
    color: #b5c6d6;
    font-size: 20px;
    padding: 0;
    margin: 0;
    small {
      display: inline-block;
      font-size: 12px;
      font-weight: bold;
    }
  }

  .title-wrapper {
    display: inline-block;
  }

  img {
    border-radius: 50%;
    vertical-align: top;
    width: 50px;
    margin-right: 8px;
  }

  padding: 8px 0;

  .menu-right {
    display: flex;
    width: 100%;
    justify-content: flex-end;
    height: 100%;
  }

  button.about {
    text-transform: lowercase;
    border: none;
    background: transparent;
    color: white;
    cursor: pointer;
  }

  .app-modal-content {
    border: 1px solid red;
    font-size: 14px;
    color: pink;
  }

  .base-select-container {
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
  }
`;
