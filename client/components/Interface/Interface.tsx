import React, { FC, useEffect } from "react";
import { useState } from "react";
import { moveHead } from "../../lib/commands";
import { ROBOT_API_URL } from "../../lib/config";
import { sendCommands } from "../../lib/robot";
import { Camera } from "./Camera";
import { ControlButtonKey, Controls } from "./Controls";
import Div100vh from "react-div-100vh";

type Props = {};

export const Interface: FC<Props> = (props) => {
  const [head, setHead] = useState({ s0: 90, s1: 90 });
  console.log(head);

  const onLeftControlsClick = async (button: ControlButtonKey) => {};
  const onRightControlsClick = async (button: ControlButtonKey) => {
    let newHead: any;
    switch (button) {
      case "up":
        newHead = { s0: head.s0, s1: head.s1 + 5 };
        break;

      case "right":
        newHead = { s0: head.s0 + 5, s1: head.s1 };
        break;

      case "down":
        newHead = { s0: head.s0, s1: head.s1 - 5 };
        break;

      case "left":
        newHead = { s0: head.s0 - 5, s1: head.s1 };
        break;
    }
    setHead(newHead);
    const commands = [moveHead(newHead.s0, newHead.s1)];
    return await sendCommands(commands);
  };

  return (
    <>
      <Div100vh>
        <div className="Interface">
          <div className="camera">
            <Camera />
          </div>
          <div className="left-controls">
            <Controls onClick={onLeftControlsClick} />
          </div>

          <div className="right-controls">
            <Controls onClick={onRightControlsClick} />
          </div>
        </div>
      </Div100vh>

      <style jsx>{`
        .Interface {
          left: 0;
          top: 0;
          width: 100vw;
          height: 100%;
        }

        .camera {
          position: absolute;
          left: 0;
          top: 0;
          width: 100vw;
          height: 100vh;
        }

        .left-controls {
          position: absolute;
          bottom: 40px;
          left: 40px;
        }

        .right-controls {
          position: absolute;
          bottom: 40px;
          right: 40px;
        }
      `}</style>
    </>
  );
};
