import React, { useEffect, useState } from "react";
import TimerStyles from "./TimerStyles.jsx";

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
      <TimerStyles>
        <Info label="Game Time" value={`${lsDay} ${lsTime}`} />
        <Info
          label="Your Time"
          value={`${localDay} ${localTime} (${Math.abs(timeDiff)} hours ${timeDiffSuffix})`}
        />
      </TimerStyles>
    </>
  );
};

export default Timer;
