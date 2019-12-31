import React, { useEffect, useState } from "react";
import SlotListStyles from "./SlotListStyles.jsx";
import Slot from "../Slot/Slot";
import createSlotArray from "../../helpers/createSlotArray";
import DayTitle from "../DayTitle/DayTitle";
import StickyBox from "react-sticky-box";
import { Container } from "react-awesome-styled-grid";
import styled from "styled-components";
import { useAppState } from "../../packages/hookstatemachine/src";
import getSlotDataByBaseLevel from "../../helpers/getSlotDataByBaseLevel";

const SbWrapper = styled.div`
  & > div {
    z-index: -2;
  }
`;

const SlotsFromDay = ({
  slots,
  slotData,
  dayOfWeek,
  currentDay,
  currentSlot
}) => {
  return (
    <>
      <StickyBox offsetTop={80}>
        <DayTitle day={dayOfWeek} />
      </StickyBox>

      {slots.map(({ s, d, dayIndex, actualTime }, key) => {
        const isCurrent = currentDay === dayOfWeek && s === currentSlot;

        return (
          <div key={key}>
            <Slot data={slotData[s]} current={isCurrent} time={actualTime} />
          </div>
        );
      })}
    </>
  );
};

const SlotList = ({ timeObject }) => {
  const { baseLevel } = useAppState("app");
  const { lsDay, slot } = timeObject;
  const { daysOfWeek, slotArray, dayIndexes } = createSlotArray(lsDay, slot);
  const stuff = getSlotDataByBaseLevel(baseLevel);
  return (
    <>
      <SlotListStyles>
        <>
          {daysOfWeek.map((dow, key) => {
            const thisDayIndex = dayIndexes[key];
            const s = slotArray.filter(activity => {
              return activity.d === dow;
            });

            const todaysSlots = stuff.filter(activity => {
              return activity.dow === thisDayIndex;
            });

            return (
              <SlotsFromDay
                key={key}
                dayOfWeek={dow}
                slots={s}
                slotData={todaysSlots}
                currentDay={lsDay}
                currentSlot={slot}
              />
            );
          })}
        </>
      </SlotListStyles>
    </>
  );
};

export default SlotList;
