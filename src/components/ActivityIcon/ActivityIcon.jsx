import React, { useEffect, useState } from "react";
import ActivityIconStyles from "./ActivityIconStyles.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ActivityIcon = ({ icon }) => {
  return (
    <>
      <ActivityIconStyles>
        <FontAwesomeIcon icon={icon} />
      </ActivityIconStyles>
    </>
  );
};

export default ActivityIcon;
