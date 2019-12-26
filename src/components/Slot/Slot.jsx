import React, { useEffect, useState } from "react";
import SlotStyles from "./SlotStyles.jsx";
import { getActivitiesByDayAndSlot } from "../../helpers/translate";
import Cell from "../Cell/Cell";

const Slot = ({ day, slot, time, current }) => {
  const activity = getActivitiesByDayAndSlot(day, slot);
  const formattedDate = time.format("h:mma");

  return (
    <>
      <SlotStyles current={current}>
        <>
          <div className="time">{formattedDate}</div>
          <Cell className="activity-cell">
            {activity.map((s, key) => {
              return (
                <Cell className="activity" key={key}>
                  {s}
                </Cell>
              );
            })}
          </Cell>
        </>
      </SlotStyles>
    </>
  );
};

export default Slot;
