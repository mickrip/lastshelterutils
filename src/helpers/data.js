import {
  faCoffee,
  faBuilding,
  faFlask,
  faUserTie,
  faStar,
  faForward,
  faTools,
  faCube,
  faIdBadge,
  faBomb
} from "@fortawesome/free-solid-svg-icons";

export const days = {
  Monday: "Gathering Day",
  Tuesday: "Building Day",
  Wednesday: "Research Day",
  Thursday: "Hero Day",
  Friday: "Troop Day",
  Saturday: "Kill Event Day",
  Sunday: "Kill Event Day"
};

const BUILDING = { name: "building", icon: faBuilding };
const BUILDSU = { name: "building speedups", icon: faForward };
const TRAINSU = { name: "training speedups", icon: faForward };
const TROOPTRAIN = { name: "training troops", icon: faUserTie };
const VIP = { name: "spend VIP points", icon: faStar };
const RESEARCHSU = { name: "research speedups", icon: faForward };
const RESEARCH = { name: "tech research", icon: faFlask };
const CRAFT = { name: "craft parts", icon: faTools };
const SPEEDUPS = { name: "any speedups", icon: faForward };
const ECORE = { name: "consume energy core", icon: faCube };
const HEROREC = { name: "hero recruitment", icon: faIdBadge };
const ZOMBIES = { name: "kill zombies", icon: faBomb };
const HERODEV = { name: "all hero development", icon: faCoffee };
const WISDOMSPAQ = { name: "spend or acquire wisdom medals", icon: faCoffee };
const WISDOMSP = { name: "spend wisdom medals", icon: faCoffee };
const TECHSPEEDUPS = { name: "tech speedups", icon: faForward };

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
