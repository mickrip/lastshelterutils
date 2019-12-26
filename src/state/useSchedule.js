import { useState, useEffect } from "react";
import getLSTimeObject from "../helpers/getLSTimeObject";

export default () => {
  const [timeObject, setTimeObject] = useState(null);
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    if (timeObject !== null) setIsReady(true);
  }, [timeObject]);

  useEffect(() => {
    setTimeObject(getLSTimeObject());
    const timer = setInterval(() => {
      setTimeObject(getLSTimeObject());
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return {
    timeObject,
    isReady
  };
};
