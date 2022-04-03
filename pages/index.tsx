import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Link from "next/link";
import Image from "next/image";
import Footer from "../components/footer";
import styled from "styled-components";
// import Dashboard from "../components/test2";

const Description = styled.p`
  :hover {
  }
`;

const Home: NextPage = () => {
  return (
    <div className={styles.container}>

      <Head>
        <title>ORTHIMMO</title>
      </Head>

      <header>
        <Header className={styles.liens} />
      </header>

      <main className={styles.main}>
        <div className=" flex flex-col lg:flex-row justify-between items-center">
          <Link href="/exclu">
            <a className="">
              <Image
                priority
                src="/maisonExclu.jpg"
                height={500}
                width={800}
                alt="links"
                className=" hover:scale-105 rounded-[30px]"
              />
            </a>
          </Link>
          <div className="flex flex-col lg:ml-20 mt-8 lg:m-0 lg:items-start">
            <h1 className=" text-7xl font-bold">
              Exclusivité Chateau <br /> Bellefont
            </h1>
            <h2 className=" mt-5 font-medium text-4xl ">House Holiday</h2>
            <Description className=" mt-2">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industrys standard dummy text
              ever since the 1500s
            </Description>
            <Link href={"/exclu"} passHref>
              <button className={styles.btn}>
                Viewport
              </button>
            </Link>
          </div>
        </div>
        {/* <Dashboard/> */}
      </main>

      <footer>
        <Footer className="" />
      </footer>
    </div>
  );
};

export default Home;
