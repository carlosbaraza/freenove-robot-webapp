import Head from "next/head";
import React, { FC, useEffect, useRef } from "react";
import { ACTUAL_ROBOT_API_URL, ROBOT_CAMERA_FEED } from "../../lib/config";

type Props = {};

export const Camera: FC<Props> = (props) => {
  const canvasEl = useRef<HTMLCanvasElement>(null);
  const player = useRef<any>(null);

  useEffect(() => {
    if (!canvasEl.current) return;
    player.current = new JSMpeg.Player(ROBOT_CAMERA_FEED, { canvas: canvasEl.current });
  }, [canvasEl]);

  return (
    <>
      <Head>
        <script type="text/javascript" src="/js/jsmpeg.min.js"></script>
      </Head>

      <div className="Camera">
        <canvas id="video-canvas" ref={canvasEl} />
      </div>

      <style jsx>{`
        .Camera {
          position: relative;
          overflow: hidden;
          width: 100%;
          height: 100%;
        }

        canvas {
          position: absolute;
          width: 101%;
          height: 101%;
        }
      `}</style>
    </>
  );
};
