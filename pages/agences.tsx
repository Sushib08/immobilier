import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import styled from "styled-components";
import Image from "next/image";
import Link from "next/link";

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

      <header>
        <Header className={styles.liens} />
      </header>

      <main className={styles.main}>
        <h1 className=" text-4xl my-8 text-[#c2ad74] font-bold underline">
          Voici nos agences en France
        </h1>
        <div className="flex flex-col items-center md:flex-row justify-between">
          <Image priority src="/map.png" height={550} width={600} alt="users" />
          <div className=" mt-[10px] text-xl font-sans font-semibold">
            <Link href="#" passHref>
              <a>
                <li className=" mb-2 hover:text-[#707070]">
                  Arthimmo Paris - 12 rue Cortot (75018)
                </li>
              </a>
            </Link>
            <Link href="#" passHref>
              <a>
                <li className=" mb-2 hover:text-[#707070]">
                  Arthimmo Lyon - 20 place de la République (69001)
                </li>
              </a>
            </Link>
            <Link href="#" passHref>
              <a>
                <li className=" mb-2 hover:text-[#707070]">Arthimmo Toulon - 6 rue Hoche (83100)</li>
              </a>
            </Link>
            <Link href="#" passHref>
              <a>
                <li className=" mb-2 hover:text-[#707070]">
                  Arthimmo Nantes - 35 rue Voltaire (44100)
                </li>
              </a>
            </Link>
            <Link href="#" passHref>
              <a>
                <li className=" mb-2 hover:text-[#707070]">
                  Arthimmo Bordeaux - 2 avenue Ares (33200)
                </li>
              </a>
            </Link>
          </div>
        </div>
      </main>

      <footer>
        <Footer className="" />
      </footer>
    </div>
  );
};

export default Home;
