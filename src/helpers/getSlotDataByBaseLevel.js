import l6 from "../generated/6.js";
import l9 from "../generated/9.js";
import l11 from "../generated/11.js";
import l14 from "../generated/14.js";
import l17 from "../generated/17.js";
import l20 from "../generated/20.js";
import l23 from "../generated/23.js";
import l25 from "../generated/25.js";

const mapped = {
  6: l6,
  9: l9,
  11: l11,
  14: l14,
  17: l17,
  20: l20,
  23: l23,
  25: l25
};

const getSlotDataByBaseLevel = level => {
  return mapped[level];
};

export default getSlotDataByBaseLevel;
