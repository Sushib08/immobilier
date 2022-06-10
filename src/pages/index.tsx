import type { NextPage } from "next";
import Head from "next/head";
import styles from "../../styles/Home.module.css";
import Header from "../components/sections/header";
import Footer from "../components/sections/footer";
import styled from "styled-components";
import ContentIndex from "../components/sections/contentIndex";

const Description = styled.p`
  margin-top: 10px;
  color: #707070;
`;

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ORTHIMMO</title>
      </Head>

      <Header className={styles.liens} />

      <main className={styles.main}>
        <ContentIndex />
      </main>

      <Footer className="" />
    </div>
  );
};

export default Home;
