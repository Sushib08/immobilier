import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Link from "next/link";
import Footer from "../components/footer";
import styled from "styled-components";
import Test from "../components/test";

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
        <Link href="/exclu">
          <a
            style={{
              backgroundImage: "url(/maisonExclu.jpg)",
              width: "100%",
              height: "100vh",
              WebkitBackgroundSize: "cover",
              backgroundPosition: "center center",
            }}
          >
            <div>
              <h2 className=" text-white text-2xl font-serif font-bold mt-[550px] ml-24 hover:text-[#C2AD74] ">
                House Holiday
              </h2>
              <Description className=" text-white h-8 w-[350px] ml-14">
                Lorem Ipsum is simply dummy text of the printing and typesetting
                industry. Lorem Ipsum has been the industrys standard dummy text
                ever since the 1500s
              </Description>
            </div>
          </a>
        </Link>
        {/* <Test/> */}
      </main>

      <footer>
        <Footer className="" />
      </footer>
    </div>
  );
};

export default Home;
