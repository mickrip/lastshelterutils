import React, { useEffect, useState } from "react";
import DayTitleStyles from "./DayTitleStyles.jsx";
import { getDayDescription } from "../../helpers/translate";
import { Container } from "react-awesome-styled-grid";

const DayTitle = ({ day }) => {
  const dayDesc = getDayDescription(day);
  return (
    <>
      <DayTitleStyles>
        <Container>
          {day} <small>{dayDesc}</small>
        </Container>
      </DayTitleStyles>
    </>
  );
};

export default DayTitle;
