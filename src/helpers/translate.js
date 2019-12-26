import { days, slots } from "./data";

export const getDayDescription = day => {
  return days[day];
};

export const getActivitiesByDayAndSlot = (day, slot) => {
  const daySlotData = slots[day];
  if (daySlotData) {
    const slotIndex = slot % 8;
    return daySlotData[slotIndex];
  } else {
    console.error("ERROR:", slots, day, "not found");
  }
};
