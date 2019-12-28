import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import useSchedule from "./state/useSchedule";
import AppStateWrapper from "./packages/hookstatemachine/src/AppStateWrapper";
import GlobalStyle from "./styles/GlobalStyle";

const containers = {
  schedule: useSchedule
};

function App() {
  return (
    <>
      <AppStateWrapper containers={containers}>
        <Home />
      </AppStateWrapper>
      <GlobalStyle />
    </>
  );
}

export default App;
