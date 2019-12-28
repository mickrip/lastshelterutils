import React, { useEffect, useState } from "react";
import NavBarStyles from "./NavBarStyles.jsx";
import { Col, Container, Row } from "react-awesome-styled-grid";
import titleimg from "./title.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInfoCircle } from "@fortawesome/free-solid-svg-icons";
import Modal from "react-responsive-modal";
import Info from "../Info/Info";

const NavBar = () => {
  const [openModal, setOpenModal] = useState(true);

  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <NavBarStyles>
        <Modal open={openModal} onClose={closeModal} center>
          <Info />
        </Modal>
        <Container>
          <Row>
            <Col>
              <h1>
                <img src={titleimg} />
                <span className="title-wrapper">
                  <small>Last Shelter</small>
                  <br />
                  COZ Schedule
                </span>
              </h1>
            </Col>
            <Col>
              <div className="menu-right">
                <button
                  className="about"
                  onClick={() => {
                    setOpenModal(true);
                  }}
                >
                  <FontAwesomeIcon icon={faInfoCircle} /> About
                </button>
              </div>
            </Col>
          </Row>
        </Container>
      </NavBarStyles>
    </>
  );
};

export default NavBar;
