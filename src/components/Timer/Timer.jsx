import React, { useEffect, useState } from "react";
import TimerStyles from "./TimerStyles.jsx";
import { Container } from "react-awesome-styled-grid";
import StickyBox from "react-sticky-box";

const Info = ({ label, value }) => {
  return (
    <div className="info">
      <strong>{label}: </strong>
      <span>{value}</span>
    </div>
  );
};

const Timer = ({ timeObject }) => {
  const {
    lsDay,
    lsTime,
    localDay,
    localTime,
    timeDiff,
    timeDiffSuffix
  } = timeObject;
  return (
    <>
      <StickyBox>
        <TimerStyles>
          <Container>
            <Info label="Game Time" value={`${lsDay} ${lsTime}`} />
            <Info
              label="Your Time"
              value={`${localDay} ${localTime} (${Math.abs(
                timeDiff
              )} hours ${timeDiffSuffix})`}
            />
          </Container>
        </TimerStyles>
      </StickyBox>
    </>
  );
};

export default Timer;
