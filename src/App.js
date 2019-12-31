import React from "react";
import "./App.css";
import Home from "./components/Home/Home";
import useSchedule from "./state/useSchedule";
import AppStateWrapper from "./packages/hookstatemachine/src/AppStateWrapper";
import GlobalStyle from "./styles/GlobalStyle";
import useApp from "./state/useApp";

const containers = {
  schedule: useSchedule,
  app: useApp
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
