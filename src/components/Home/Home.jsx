import React, { useEffect, useState } from "react";
import HomeStyles from "./HomeStyles.jsx";
import NavBar from "../NavBar/NavBar";
import { useAppState } from "../../packages/hookstatemachine/src";
import Timer from "../Timer/Timer";
import SlotList from "../SlotList/SlotList";

const Home = () => {
  const { timeObject, isReady } = useAppState("schedule");
  if (isReady === false) return null;
  return (
    <>
      <NavBar />
      <HomeStyles>
        <Timer timeObject={timeObject} />

        <SlotList timeObject={timeObject} />
      </HomeStyles>
    </>
  );
};

export default Home;
