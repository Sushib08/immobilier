import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Footer from "../components/footer";
import styled from "styled-components";
import ButtonFavoris from "../components/buttonFavoris";
import ButtonMessage from "../components/buttonMessage";

const Description = styled.p`
  :hover {
    text-shadow: 6px 6px 4px #707070;
  }
`;

const Exclu: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ORTHIMMO - Exclusivité</title>
      </Head>

      <header>
        <Header className={styles.liens} />
      </header>

      <main className={styles.main}>
        <h1 className=" text-5xl mb-6 text-[#C2AD74] font-bold">
          HOUSE OF HOLIDAY - EXCLU  
        </h1>
        <div
          style={{
            backgroundImage: "url(/maisonExclu.jpg)",
            width: "100%",
            height: "100vh",
            WebkitBackgroundSize: "cover",
            backgroundPosition: "center center",
            borderRadius : "30px",
          }}
        ></div>
        <div className=" flex flex-col lg:flex-row justify-between my-8">
          <div className="flex items-center flex-col mb-6 lg:m-0 lg:items-start">
            <h2 className=" text-4xl font-sans font-bold mb-2">Maison 6 pièces</h2>
            <h3 className=" text-3xl font-sans mb-1">150 m2</h3>
            <p className=" text-lg font-serif font-bold text-[#707070] mb-3">Toulon</p>
            <h2 className=" text-3xl font-sans font-semibold text-[#C2AD74] mb-6">Prix : 350 000€</h2>
            <div className=" flex justify-center">
            <div className=" mx-1"><ButtonFavoris fill="red" /></div>
            <div className=" mx-1"></div><ButtonMessage fill="" /></div>
          </div>
          <div className=" lg:ml-6 max-w-[600px] text-[#707070]">
            <p className=" mb-4 mt-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Possimus
              quaerat eum temporibus placeat distinctio animi, ut molestiae,
              illum neque voluptatibus nemo iste doloremque in deleniti hic sunt
              amet vero praesentium. Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas
              suscipit dolorem, impedit adipisci rerum esse? Placeat aliquid
              doloremque impedit quas natus, omnis fugiat assumenda inventore
              modi sequi tenetur exercitationem obcaecati.
            </p>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Commodi
              rem iusto, deleniti doloribus omnis, cupiditate unde doloremque
              quam, facilis recusandae sed. Perferendis aperiam vitae ex harum,
              sint est iusto quibusdam?
            </p>
          </div>
        </div>
      </main>

      <footer>
        <Footer className="" />
      </footer>
    </div>
  );
};

export default Exclu;
