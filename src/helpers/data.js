export const days = {
  Monday: "Gathering Day",
  Tuesday: "Building Day",
  Wednesday: "Research Day",
  Thursday: "Hero Day",
  Friday: "Troop Day",
  Saturday: "Kill Event Day",
  Sunday: "Kill Event Day"
};

const BUILDING = "building";
const BUILDSU = "building speedups";
const TRAINSU = "training speedups";
const TROOPTRAIN = "raining troops";
const VIP = "spend VIP points";
const RESEARCHSU = "research speedups";
const RESEARCH = "tech research";
const CRAFT = "craft parts";
const SPEEDUPS = "any speedups";
const ECORE = "consume energy core";
const HEROREC = "hero recruitment";
const ZOMBIES = "kill zombies";
const HERODEV = "all hero development";
const WISDOMSPAQ = "spend or acquire wisdom medals";
const WISDOMSP = "spend wisdom medals";
const TECHSPEEDUPS = "tech speedups";

export const slots = {
  Monday: [
    [BUILDING, BUILDSU],
    [BUILDING],
    [TRAINSU, VIP],
    [BUILDING, TROOPTRAIN, VIP],
    [BUILDSU, RESEARCHSU, TRAINSU],
    [BUILDING, RESEARCH, TRAINSU],
    [BUILDING, RESEARCH, TROOPTRAIN],
    [BUILDING]
  ],
  Tuesday: [
    [BUILDING, CRAFT],
    [BUILDING, RESEARCH, TRAINSU],
    [BUILDING, CRAFT],
    [SPEEDUPS],
    [BUILDING, RESEARCH],
    [BUILDING, BUILDSU, ECORE],
    [BUILDING, RESEARCH],
    [BUILDING, RESEARCH, TROOPTRAIN]
  ],

  Wednesday: [
    [SPEEDUPS],
    [RESEARCH, RESEARCHSU],
    [BUILDSU, RESEARCHSU, TRAINSU],
    [BUILDING, RESEARCH, CRAFT],
    [BUILDING, RESEARCH, CRAFT],
    [BUILDING, RESEARCHSU, TRAINSU],
    [BUILDING, RESEARCH, TRAINSU, ECORE],
    [BUILDING, RESEARCH]
  ],
  Thursday: [
    [HEROREC, ZOMBIES], //0
    [HERODEV], //1
    [WISDOMSPAQ, ZOMBIES], //2
    [HERODEV], //3
    [HEROREC, WISDOMSP], //4
    [HERODEV], //5
    [WISDOMSPAQ, ZOMBIES], //6
    [HERODEV] //7
  ],
  Friday: [
    [SPEEDUPS], //0
    [BUILDSU, RESEARCHSU, TRAINSU], //1
    [BUILDING, RESEARCH, TRAINSU], //2
    [TRAINSU], //3
    [BUILDING, RESEARCH, TRAINSU], //4
    [BUILDING, TROOPTRAIN], //5
    [BUILDING, TROOPTRAIN], //6
    [SPEEDUPS] //7
  ],
  Saturday: [
    [SPEEDUPS], //0
    [RESEARCH, TECHSPEEDUPS], //1
    [BUILDING, TROOPTRAIN], //2
    [TRAINSU], //3
    [BUILDING, RESEARCH, TRAINSU], //4
    [BUILDING, RESEARCH, TRAINSU], //5
    [BUILDING, TROOPTRAIN], //6
    [RESEARCH, TROOPTRAIN] //7
  ],
  Sunday: [
    [SPEEDUPS], //0
    [RESEARCH, TECHSPEEDUPS], //1
    [BUILDING, TROOPTRAIN], //2
    [TRAINSU], //3
    [BUILDING, RESEARCH, TRAINSU], //4
    [BUILDING, RESEARCH, TRAINSU], //5
    [BUILDING, TROOPTRAIN], //6
    [RESEARCH, TROOPTRAIN] //7
  ]
};
