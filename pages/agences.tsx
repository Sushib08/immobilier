import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/sections/header";
import Footer from "../components/sections/footer";
import styled from "styled-components";
import Image from "next/image";
import Adress from "../components/elements/adress";
import ContentAgences from "../components/sections/contentAgences";

const Description = styled.p`
  :hover {
    text-shadow: 6px 6px 4px #707070;
  }
`;

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ORTHIMMO - Nos agences</title>
      </Head>

      <Header className={styles.liens} />

      <main className={styles.main}>
        <ContentAgences />
      </main>

      <Footer className="" />
    </div>
  );
};

export default Home;
