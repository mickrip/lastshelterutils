import React, { useEffect, useState } from "react";
import InfoStyles from "./InfoStyles.jsx";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Modal from "react-responsive-modal";
const lssURL = "http://www.lssnfo.com/";
const ghUrl = "https://github.com/mickrip/lastshelterutils";
const twUrl = "https://twitter.com/mickrippon";
const Info = () => {
  return (
    <>
      <InfoStyles>
        <div className="title">
          <h2>Last Shelter COZ Schedule</h2>
          <p>By Mick Rippon (mickrip / state:330)</p>
        </div>

        <div className="cblock">
          <FontAwesomeIcon icon={faGithub} />{" "}
          <a href={ghUrl} target="_blank">
            View Source
          </a>
        </div>
        <div className="cblock">
          <FontAwesomeIcon icon={faTwitter} />{" "}
          <a href={twUrl} target="_blank">
            @MickRippon
          </a>
        </div>
        <hr />
        <p>
          Schedule data taken from{" "}
          <a href={lssURL} target="_blank">
            www.lssnfo.com
          </a>
          <div>(many thanks, how do I contact you?)</div>
        </p>
      </InfoStyles>
    </>
  );
};

export default Info;
