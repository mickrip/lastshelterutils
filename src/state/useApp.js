import { useState } from "react";

export default () => {
  const [showInfo, setShowInfo] = useState(false);
  return {
    showInfo,
    setShowInfo
  };
};
