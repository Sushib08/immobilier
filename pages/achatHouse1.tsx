import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/sections/header";
import Footer from "../components/sections/footer";
import ContentHouseAchat from "../components/sections/contentAchatHouse";


const AchatHouse: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ORTHIMMO - Maison Chic</title>
      </Head>

      <Header className={styles.liens} />

      <main className={styles.main}>
        <ContentHouseAchat />
      </main>

      <Footer className="" />
    </div>
  );
};

export default AchatHouse;
