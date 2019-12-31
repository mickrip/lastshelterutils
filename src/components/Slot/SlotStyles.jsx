import React from "react";
import styled from "styled-components";

export default styled.div`
  .time {
    background: #6e7a9c;

    color: #2b6c80;
    font-size: 130%;
    margin-bottom: 8px;
    width: 100%;
    font-weight: ${props => (props.current ? "bold" : "normal")};
    color: #eee;
    padding: 8px 0;
    //text-align: right;
  }

  .activity {
    line-height: 18px;
    font-size: 80%;
    flex-wrap: nowrap;
    border-radius: 4px;
    padding: 4px 8px 0 8px;
    margin-right: 4px;
    color: ${props => (props.current ? "#eee" : "#eee")};
    background: ${props => (props.current ? "#369c51" : "#485e9e")};
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

export const RewardStyles = styled.div`
  margin-bottom: 8px;
  .reward-label {
    font-weight: bold;
  }

  .t1 {
    .reward-item {
      background: #d9eaf9;
    }
    .reward-label {
      color: #14355b;
    }
  }

  .t2 {
    .reward-item {
      background: #f9f0f3;
    }
    .reward-label {
      color: #470423;
    }
  }

  .t3 {
    .reward-item {
      background: #f4f0e7;
    }
    .reward-label {
      color: #4d4e1d;
    }
  }

  .reward-list {
    padding: 4px 0;
    .reward-item {
      line-height: 18px;
      font-size: 90%;
      flex-wrap: nowrap;
      border-radius: 4px;
      padding: 4px 8px;

      border: 1px solid #fff;
    }
  }
`;
