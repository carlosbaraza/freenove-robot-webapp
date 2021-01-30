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
        <h1>Cam feed</h1>

        <img src="http://0.0.0.0:2204/video_feed" />
      </div>
    </>
  );
}
