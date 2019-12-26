import React, { useEffect, useState } from "react";
import SlotListStyles from "./SlotListStyles.jsx";
import Slot from "../Slot/Slot";
import createSlotArray from "../../helpers/createSlotArray";
import DayTitle from "../DayTitle/DayTitle";

const SlotList = ({ timeObject }) => {
  const { lsDay, slot } = timeObject;
  const slots = createSlotArray(lsDay, slot);
  let _lastDay = null;
  return (
    <>
      <SlotListStyles>
        <>
          {slots.map(({ s, d, actualTime }, key) => {
            const current = d === lsDay && slot === s;
            const showDaytitle = _lastDay !== d;
            _lastDay = d;
            return (
              <div key={key}>
                {showDaytitle && <DayTitle day={d} />}
                <Slot slot={s} day={d} current={current} time={actualTime} />
              </div>
            );
          })}
        </>
      </SlotListStyles>
    </>
  );
};

export default SlotList;
