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
  faBomb,
  faExpand,
  faDollarSign,
  faThumbsUp,
  faMedal
} from "@fortawesome/free-solid-svg-icons";

let mapped = {
  build: faBuilding,
  "build su": faForward,
  "energy core": faCube,
  "tech su": faForward,
  train: faUserTie,
  tech: faFlask,
  "train su": faForward,
  "hero xp": faExpand,
  "any su": faForward,
  part: faTools,
  recruit: faIdBadge,
  "spend medal": faDollarSign,
  skill: faThumbsUp,
  "get medal": faMedal,
  "kill zombies": faBomb,
  vip: faStar
};

const typeToIcon = type => {
  const ltype = type.toLowerCase();
  if (!mapped[ltype]) console.log(ltype);
  return mapped[ltype] ? mapped[ltype] : faCoffee;
};

export default typeToIcon;
