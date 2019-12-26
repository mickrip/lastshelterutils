import indexOf from "lodash/indexOf";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

const createSlotArray = (lsDay, slot, previousSlots = 0, futureSlots = 72) => {
  const lsDayIndex = indexOf(days, lsDay);
  let slotArray = [];
  for (let x = slot - previousSlots; x < slot + futureSlots; x++) {
    const m = (x + 2400) % 24;
    let test = Math.floor(x / 24);
    const realDayIndex = (lsDayIndex + test) % 7;
    slotArray.push({
      s: m,
      d: days[realDayIndex],
      offset: x,
      dayIndex: realDayIndex
    });
  }

  return slotArray;
};

export default createSlotArray;
