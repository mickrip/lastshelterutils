import { useState, useEffect } from "react";

export default () => {
  const [isReady, setIsReady] = useState(false);
  const [baseLevel, setBaseLevel] = useState(25);

  useEffect(() => {
    const b = localStorage.getItem("base");

    if (b) {
      setBaseLevel(parseFloat(b, 10));
      console.log("SETTING", b);
    }
    setIsReady(true);
  }, []);

  useEffect(() => {
    if (!isReady) return;
    const b = localStorage.getItem("base");
    localStorage.setItem("base", baseLevel);
  }, [baseLevel]);

  return {
    baseLevel,
    setBaseLevel,
    isReady
  };
};
