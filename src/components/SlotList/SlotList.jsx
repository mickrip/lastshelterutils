import React, { useEffect, useState } from "react";
import SlotListStyles from "./SlotListStyles.jsx";
import Slot from "../Slot/Slot";
import createSlotArray from "../../helpers/createSlotArray";
import DayTitle from "../DayTitle/DayTitle";
import StickyBox from "react-sticky-box";
import { Container } from "react-awesome-styled-grid";

const SlotsFromDay = ({ slots, dayOfWeek, currentDay, currentSlot }) => {
  return (
    <>
      <StickyBox offsetTop={80}>
        <DayTitle day={dayOfWeek} />
      </StickyBox>
      <Container>
        {slots.map(({ s, d, actualTime }, key) => {
          const isCurrent = currentDay === dayOfWeek && s === currentSlot;
          return (
            <div key={key}>
              <Slot slot={s} day={d} current={isCurrent} time={actualTime} />
            </div>
          );
        })}
      </Container>
    </>
  );
};

const SlotList = ({ timeObject }) => {
  const { lsDay, slot } = timeObject;
  const { daysOfWeek, slotArray } = createSlotArray(lsDay, slot);

  return (
    <>
      <SlotListStyles>
        <>
          {daysOfWeek.map((dow, key) => {
            const s = slotArray.filter(activity => {
              return activity.d === dow;
            });

            return (
              <SlotsFromDay
                key={key}
                dayOfWeek={dow}
                slots={s}
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
