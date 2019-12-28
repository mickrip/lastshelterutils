import React, { useEffect, useState } from "react";
import SlotStyles from "./SlotStyles.jsx";
import { getActivitiesByDayAndSlot } from "../../helpers/translate";
import Cell from "../Cell/Cell";
import ActivityIcon from "../ActivityIcon/ActivityIcon";

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
                  <ActivityIcon icon={s.icon} />
                  {s.name}
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

/*

 */
