import React from "react";
import "./App.css";
import getLSTimeObject from "./helpers/getLSTimeObject";
import Home from "./components/Home/Home";
import useSchedule from "./state/useSchedule";
import AppStateWrapper from "./packages/hookstatemachine/src/AppStateWrapper";

const containers = {
  schedule: useSchedule
};

function App() {
  const hello = getLSTimeObject();

  return (
    <AppStateWrapper containers={containers}>
      <Home />
    </AppStateWrapper>
  );
}

export default App;
