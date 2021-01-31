import Head from "next/head";
import React, { FC } from "react";
import { Interface } from "../../Interface/Interface";

type Props = {};

export const IndexPage: FC<Props> = (props) => {
  return (
    <>
      <Head>
        <title>Freenove WebUI</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="IndexPage">
        <Interface />
      </div>

      <style jsx>{`
        .IndexPage {
          display: flex;
          flex-direction: column;
        }
      `}</style>
    </>
  );
};
