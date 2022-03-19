import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import styled from "styled-components";
import Image from "next/image";

const Description = styled.p`
  :hover {
    text-shadow: 6px 6px 4px #707070;
  }
`;

const Home: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ARTHIMMO</title>
      </Head>

      <header>
        <Header className={styles.liens} />
      </header>

      <main className={styles.main}>
          <h1 className=" text-4xl my-8 text-[#c2ad74] font-bold underline">Voici nos agences en France</h1>
      <Image
              priority
              src="/map.png"
              height={550}
              width={600}
              alt="users"
            />
      </main>

      <footer>
        <Footer className="" />
      </footer>
    </div>
  );
};

export default Home;
