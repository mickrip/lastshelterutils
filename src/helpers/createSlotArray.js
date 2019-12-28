import indexOf from "lodash/indexOf";
import moment from "moment";

const days = [
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
  "Sunday"
];

/*
  Creates a list of slots (by default, it's the next 72)
 */

const createSlotArray = (lsDay, slot, previousSlots = 0, futureSlots = 140) => {
  const lsDayIndex = indexOf(days, lsDay);
  let slotArray = [];
  const momentStartOfDay = moment()
    .utc()
    .startOf("day");

  for (let x = slot - previousSlots; x < slot + futureSlots; x++) {
    const m = (x + 4800) % 24;
    let test = Math.floor(x / 24);
    const realDayIndex = (lsDayIndex + test) % 7;

    slotArray.push({
      s: m,
      d: days[realDayIndex],
      offset: x,
      actualTime: moment(momentStartOfDay)
        .add(x + 2, "hours")
        .local()
    });
  }

  let lastDay = null;

  const daysOfWeek = slotArray
    .map(activity => {
      const returnThis = activity.d !== lastDay ? activity.d : null;
      lastDay = activity.d;
      return returnThis;
    })
    .filter(x => x !== null);

  return { daysOfWeek, slotArray };
};

export default createSlotArray;
