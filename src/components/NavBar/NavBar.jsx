import React, { useEffect, useState } from "react";
import NavBarStyles from "./NavBarStyles.jsx";
import { Container } from "react-awesome-styled-grid";

const NavBar = () => {
  return (
    <>
      <NavBarStyles>
        <Container>
          <h1>Last Shelter COZ Schedule</h1>
        </Container>
      </NavBarStyles>
    </>
  );
};

export default NavBar;
