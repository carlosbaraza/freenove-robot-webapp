import React, { FC } from "react";
import {
  BiCaretDownCircle,
  BiCaretLeftCircle,
  BiCaretRightCircle,
  BiCaretUpCircle,
} from "react-icons/bi";

export type ControlButtonKey = "up" | "left" | "right" | "down";
type Props = {
  onClick: (buttonKey: ControlButtonKey) => void;
};

export const Controls: FC<Props> = (props) => {
  return (
    <>
      <div className="Controls">
        <button onClick={() => props.onClick("left")} className="control left">
          <BiCaretLeftCircle />
        </button>
        <button onClick={() => props.onClick("up")} className="control up">
          <BiCaretUpCircle />
        </button>
        <button onClick={() => props.onClick("right")} className="control right">
          <BiCaretRightCircle />
        </button>
        <button onClick={() => props.onClick("down")} className="control down">
          <BiCaretDownCircle />
        </button>
      </div>

      <style jsx>{`
        --control-size: 50px;

        .Controls {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 50%;
          position: relative;
          width: calc(var(--control-size) * 3 + 10px);
          height: calc(var(--control-size) * 3 + 10px);
        }

        .control {
          position: absolute;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--control-size);
          width: var(--control-size);
          height: var(--control-size);
          line-height: 1;
          color: white;
          padding: 0;
          border: 0;
          background: none;
        }

        .control:focus {
          outline: none;
          background: rgba(255, 255, 255, 0.3);
          border-radius: 50%;
        }

        .control.up {
          top: 10px;
          left: 50%;
          margin-left: calc(var(--control-size) / 2 * -1);
        }

        .control.down {
          bottom: 10px;
          left: 50%;
          margin-left: calc(var(--control-size) / 2 * -1);
        }

        .control.left {
          left: 10px;
          top: 50%;
          margin-top: calc(var(--control-size) / 2 * -1);
        }

        .control.right {
          right: 10px;
          top: 50%;
          margin-top: calc(var(--control-size) / 2 * -1);
        }
      `}</style>
    </>
  );
};
