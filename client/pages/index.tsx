import Head from "next/head";
import styles from "./index.module.css";

export default function () {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className={styles.container}>
        <h1>RPi camera feed</h1>

        <img src={`http://192.168.1.247:2204/video_feed`} />
      </div>
    </>
  );
}
