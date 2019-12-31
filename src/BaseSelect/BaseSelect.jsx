import React, { useEffect, useState } from "react";
import BaseSelectStyles from "./BaseSelectStyles.jsx";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { useAppState } from "../packages/hookstatemachine/src";

import Modal from "react-responsive-modal";
import { BaseSelectModalStyle } from "./BaseSelectStyles";

const opts = [
  { text: "6-9", value: 6 },
  { text: "9-10", value: 9 },
  { text: "11-13", value: 11 },
  { text: "14-16", value: 14 },
  { text: "17-19", value: 17 },
  { text: "20-22", value: 20 },
  { text: "23-24", value: 23 },
  { text: "25", value: 25 }
];

const getTextFromValueInOpts = value => {
  return opts.find(x => {
    return x.value === value;
  });
};

const BaseSelect = () => {
  const [openModal, setOpenModal] = useState(false);
  const { baseLevel, setBaseLevel } = useAppState("app");
  const closeModal = () => {
    setOpenModal(false);
  };

  return (
    <>
      <BaseSelectStyles>
        <Modal open={openModal} onClose={closeModal} center>
          <BaseSelectModalStyle>
            <h2>What's your Base Level?</h2>

            {opts.map((opt, key) => {
              return (
                <div
                  key={key}
                  className="baselevel-select"
                  onClick={() => {
                    setBaseLevel(opt.value);
                    closeModal();
                  }}
                >
                  Level {opt.text}
                </div>
              );
            })}
          </BaseSelectModalStyle>
        </Modal>

        <button className="nb-button" onClick={() => setOpenModal(true)}>
          Your Base Level: {getTextFromValueInOpts(baseLevel).text}
          <span>
            <FontAwesomeIcon icon={faCaretDown} />
          </span>
        </button>
      </BaseSelectStyles>
    </>
  );
};

export default BaseSelect;
