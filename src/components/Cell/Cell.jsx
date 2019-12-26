import React, { useEffect, useState } from "react";
import CellStyles from "./CellStyles.jsx";

const Cell = ({ children, className = "" }) => {
  return (
    <>
      <CellStyles>
        <div className={className}>{children}</div>
      </CellStyles>
    </>
  );
};

export default Cell;
