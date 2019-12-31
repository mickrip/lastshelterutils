import React, { useEffect, useState } from "react";
import SlotStyles from "./SlotStyles.jsx";
import { getActivitiesByDayAndSlot } from "../../helpers/translate";
import Cell from "../Cell/Cell";
import ActivityIcon from "../ActivityIcon/ActivityIcon";
import { RewardStyles } from "./SlotStyles";
import StickyBox from "react-sticky-box";
import { Container } from "react-awesome-styled-grid";

const Rewards = ({ label, rewards, tierPoint, className }) => {
  return (
    <RewardStyles>
      <div className={className}>
        <div className="reward-label">
          {label} ({tierPoint})
        </div>
        <div className="reward-list">
          {rewards.map((reward, key) => {
            return (
              <span key={key} className="reward-item">
                {reward}
              </span>
            );
          })}
        </div>
      </div>
    </RewardStyles>
  );
};

const Slot = ({ data, time, current }) => {
  //const activity = getActivitiesByDayAndSlot(day, slot);
  const formattedDate = time.format("h:mma");

  const { rewards, tierPoints, objectives } = data;

  return (
    <>
      <SlotStyles current={current}>
        <>
          <StickyBox offsetTop={120}>
            <div className="time">
              <Container>{formattedDate}</Container>
            </div>
          </StickyBox>
          <Container>
            <Cell className="activity-cell">
              {objectives.map((objective, key) => {
                return (
                  <Cell className="activity" key={key}>
                    {objective.name}
                  </Cell>
                );
              })}
            </Cell>
            <Cell className="rewards" block>
              <Cell block>
                <Rewards
                  className="t1"
                  label="Box 1"
                  rewards={rewards["T1"]}
                  tierPoint={tierPoints[0]}
                />
              </Cell>
              <Cell block>
                <Rewards
                  className="t2"
                  label="Box 2"
                  rewards={rewards["T2"]}
                  tierPoint={tierPoints[1]}
                />
              </Cell>
              <Cell block>
                <Rewards
                  className="t3"
                  label="Box 3"
                  rewards={rewards["T3"]}
                  tierPoint={tierPoints[2]}
                />
              </Cell>
            </Cell>
          </Container>
        </>
      </SlotStyles>
    </>
  );
};

export default Slot;

/*
   <Cell className="activity-cell">
            {activity.map((s, key) => {
              return (
                <Cell className="activity" key={key}>
                  <ActivityIcon icon={s.icon} />
                  {s.name}
                </Cell>
              );
            })}
          </Cell>
 */
