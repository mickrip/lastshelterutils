import React, { useEffect, useState } from "react";
import DayTitleStyles from "./DayTitleStyles.jsx";
import { getDayDescription } from "../../helpers/translate";

const DayTitle = ({ day }) => {
  const dayDesc = getDayDescription(day);
  return (
    <>
      <DayTitleStyles>
        <h2>
          {day} - <small>{dayDesc}</small>
        </h2>
      </DayTitleStyles>
    </>
  );
};

export default DayTitle;
