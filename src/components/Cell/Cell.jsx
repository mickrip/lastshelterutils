import React, { useEffect, useState } from "react";
import CellStyles from "./CellStyles.jsx";

const Cell = ({ children, block = false, className = "" }) => {
  return (
    <>
      <CellStyles block={block}>
        <div className={className}>{children}</div>
      </CellStyles>
    </>
  );
};

export default Cell;
