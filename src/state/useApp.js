import { useState, useEffect } from "react";

export default () => {
  const [baseLevel, setBaseLevel] = useState(25);

  useEffect(() => {
    //console.log("BR changed", baseLevel);
  }, [baseLevel]);

  return {
    baseLevel,
    setBaseLevel
  };
};
