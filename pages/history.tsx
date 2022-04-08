/* eslint-disable react/no-unescaped-entities */
import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/sections/header";
import Image from "next/image";
import Footer from "../components/sections/footer";
import styled from "styled-components";
import ButtonViewport from "../components/elements/buttonViewport";

const Description = styled.p`
  margin-top: 10px;
  color : #707070;
  max-width : 1000px;
`;

const History: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ORTHIMMO</title>
      </Head>

      <Header className={styles.liens} />

      <main className={styles.main}>
        <div className=" flex flex-col lg:flex-row justify-between items-center">
              <Image
                priority
                src="/history.jpg"
                height={500}
                width={800}
                alt="links"
                className=" hover:scale-105 rounded-[30px]"
              />
          <div className="flex flex-col lg:ml-20 mt-8 lg:m-0 lg:items-start">
            <h1 className=" text-7xl font-bold">
             Notre histoire -<br /> Notre parcours
            </h1>
            <Description>
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
            text of the printing and typesetting industry.
            </Description>
            <ButtonViewport link={"/recrutement"} text={"Recrutement"}></ButtonViewport>
          </div>
        </div>
      </main>

        <Footer className="" />
    </div>
  );
};

export default History;
