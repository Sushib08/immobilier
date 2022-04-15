import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import Header from "../components/sections/header";
import Footer from "../components/sections/footer";
import styled from "styled-components";
import ButtonFavoris from "../components/elements/buttonFavoris";
import ButtonMessage from "../components/elements/buttonMessage";
import ContentExclu from "../components/sections/contentExclu";

const Description = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-top: 30px;
  margin-bottom: 30px;

  @media (max-width: 1024px) {
    flex-direction: column;
  }
`;

const Title = styled.h1`
  font-size: 50px;
  margin-bottom: 25px;
  color: #c2ad74;
  font-weight: 600;
  letter-spacing: 0.5rem;
`;

const LodgmentTitle = styled.h2`
  font-size: 35px;
  font-family: "Segoe UI"
  font-weight: 600;
  margin-bottom: 10px;
`;

const Dimension = styled.h3`
  font-size: 30px;
  font-family: "Segoe UI"
  margin-bottom: 5px;
`;

const Price = styled.h2`
  font-size: 30px;
  font-family: "Segoe UI";
  font-weight: 600;
  margin-bottom: 25px;
  color: #c2ad74;
  letter-spacing: 0.1rem;
`;

const City = styled.p`
  font-size: 20px;
  font-family: "Georgia";
  color: #707070;
  font-weight: 700;
  margin-bottom: 25px;
`;

const Details = styled.div`
  display: flex;
  align-items: flex-start;
  flex-direction: column;
  margin-bottom: 25px;

  @media (max-width: 1024px) {
    margin: 0;
    align-items: center;
  }
`;

const OtherDetails = styled.div`
  max-width: 600px;
  color: #707070;
  margin-left: 40px;

  @media (max-width: 1024px) {
    margin-left: 25px;
  }
`;

const Exclu: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ORTHIMMO - Exclusivité</title>
      </Head>

      <Header className={styles.liens} />

      <main className={styles.main}>
        <ContentExclu />
      </main>

      <Footer className="" />
    </div>
  );
};

export default Exclu;
