import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Header from "../components/sections/header";
import Footer from "../components/sections/footer";
import ContentServices from "../components/sections/contentServices";

const Services: NextPage = () => {

  return (
    <div className={styles.container}>
      <Head>
        <title>ORTHIMMO - Services clients</title>
      </Head>

      <Header className={styles.liens} />

      <main className={styles.main}>
      <ContentServices />
      </main>

      <Footer className="" />
    </div>
  );
};

export default Services;
