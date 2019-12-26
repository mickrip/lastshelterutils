import moment from "moment";

const getLSTimeObject = () => {
  // LS appears to be 2 hours behind UTC
  const lsTime = moment()
    .utc()
    .subtract(2, "hours");

  const localTime = moment().local();

  const lsDisp = lsTime.utcOffset(0, true);
  const localDisp = localTime.utcOffset(0, true);
  const timeDiff = localDisp.diff(lsDisp, "hours");
  const timeDiffSuffix = timeDiff < 0 ? "behind" : "ahead";

  return {
    lsDay: lsTime.format("dddd"),
    lsTime: lsTime.format("HH:mm"),
    slot: parseInt(lsTime.format("H"), 10),
    localDay: localTime.format("dddd"),
    localTime: localTime.format("HH:mm"),
    timeDiff,
    timeDiffSuffix
  };
};

export default getLSTimeObject;
