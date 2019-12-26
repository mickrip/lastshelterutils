import React, { useEffect, useState } from "react";
import SlotStyles from "./SlotStyles.jsx";
import { getActivitiesByDayAndSlot } from "../../helpers/translate";

const Slot = ({ day, slot, current }) => {
  const activity = getActivitiesByDayAndSlot(day, slot);

  return (
    <>
      <SlotStyles current={current}>
        <>
          <span>{slot + 1}</span>
          {activity.map((s, key) => {
            return <span key={key}>{s} / </span>;
          })}
        </>
      </SlotStyles>
    </>
  );
};

export default Slot;
