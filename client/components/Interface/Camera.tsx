import React, { FC } from "react";
import { ACTUAL_ROBOT_API_URL } from "../../lib/config";

type Props = {};

export const Camera: FC<Props> = (props) => {
  return (
    <>
      <div className="Camera">
        <img src={`${ACTUAL_ROBOT_API_URL}/camera`} />
      </div>

      <style jsx>{`
        .Camera {
        }

        img {
          width: 100%;
          height: 100%;
        }
      `}</style>
    </>
  );
};
