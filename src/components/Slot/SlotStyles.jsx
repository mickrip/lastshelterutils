import React from "react";
import styled from "styled-components";

export default styled.div`
  padding: 4px 0;
  .time {
    color: #2b6c80;
    font-size: 130%;
    margin-bottom: 4px;
    width: 100%;
    font-weight: ${props => (props.current ? "bold" : "normal")};
    color: ${props => (props.current ? "#218011" : "#2b6c80")};
    //width: 80px;
    margin-right: 8px;
    //text-align: right;
  }

  .activity {
    line-height: 18px;
    font-size: 80%;
    flex-wrap: nowrap;
    border-radius: 4px;
    padding: 4px 8px 0 8px;
    margin-right: 4px;
    color: ${props => (props.current ? "#eee" : "#333")};
    background: ${props => (props.current ? "#369c51" : "#efefef")};
    border: 1px solid #eee;
  }

  .activity-cell {
    font-weight: bold;
    margin-bottom: 12px;
    text-transform: uppercase;
    display: flex;
    flex-wrap: nowrap;
  }
`;
