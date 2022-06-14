import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Header from "../components/sections/header";
import Footer from "../components/sections/footer";
import ContentHistory from "../components/sections/contentHistory";

const History: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ORTHIMMO</title>
      </Head>

      <Header className={styles.liens} />

      <main className={styles.main}>
        <ContentHistory />
      </main>

      <Footer className="" />
    </div>
  );
};

export default History;
