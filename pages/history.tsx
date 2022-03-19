/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import styled from "styled-components";

const Paragraph1 = styled.p`
  height: 280px;
  width: 1350px;
  margin-top: 50px;
  font-size: 15px;
  color: #707070;
  margin-left: auto;
  margin-right: auto;
`;

const Paragraph2 = styled.p`
  height: 150px;
  width: 1350px;
  font-size: 15px;
  color: #707070;
  margin-left: auto;
  margin-right: auto;
`;

const History: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ARTHIMMO - Notre histoire</title>
      </Head>

      <header>
        <Header className={styles.liens} />
      </header>

      <main className={styles.main}>
        <div
          style={{
            backgroundImage: "url(/history.jpg)",
            width: "100%",
            height: "100vh",
            WebkitBackgroundSize: "cover",
            backgroundPosition: "center center",
          }}
        >
          <h2 className=" text-white text-5xl font-serif font-semibold mt-[400px] text-center hover:text-[#C2AD74] ">
            Notre Histoire
          </h2>
        </div>
        <div>
          <Paragraph1>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500sLorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500sLorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500sLorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            15Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500sLorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500sLorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500sLorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500sLorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500sLorem Ipsum is simply dummy text of
            the printing and typesetting industry. Lorem Ipsum has been the
            industry's standard dummy text ever since the 1500sLorem Ipsum is
            simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            1500sLorem Ipsum is simply dummy text of the printing and
            typesetting industry. Lorem Ipsum has been the industry's standard
            dummy text ever since the 1500s00s
          </Paragraph1>
          <Paragraph2>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500sLorem Ipsum is simply dummy text of the printing
            and typesetting industry. Lorem Ipsum has been the industry's
            standard dummy text ever since the 1500sLorem Ipsum is simply dummy
            text of the printing and typesetting industry. Lorem Ipsum has been
            the industry's standard dummy text ever since the 1500sLorem Ipsum
            is simply dummy text of the printing and typesetting industry. Lorem
            Ipsum has been the industry's standard dummy text ever since the
            15Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500sLorem Ipsum is simply dummy text of the printing
            and typesetting indu
          </Paragraph2>
        </div>
      </main>

      <footer>
        <Footer className="" />
      </footer>
    </div>
  );
};

export default History;
