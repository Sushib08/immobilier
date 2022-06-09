import type { GetStaticProps, NextPage } from "next";
import Head from "next/head";
// import styles from "../styles/Home.module.css";
import styled from "styled-components";
import Header from "../../components/sections/header";
import ListAchats from "../../components/sections/listAchats";
import Footer from "../../components/sections/footer";
import { getSortedDocsData } from "../../lib/posts";

const Input = styled.input`
  padding: 5px;
  padding-left: 15px;
  height: 35px;
  width: 200px;
  font-size: 18px;
  outline: none;
  border: none;
  background-color: #eee;
  border-radius: 10px;
  color: #707070;
  margin-right: 50px;

  :hover {
    border: 1px solid #c2ad74;
  }
`;

interface IAchat {
  allDocsData: ReturnType<typeof getSortedDocsData>;
}

const Achats: NextPage<IAchat> = (props) => {
  const { allDocsData } = props;
  return (
    <div>
      <Head>
        <title>ORTHIMMO - Achats</title>
      </Head>

      <Header className="liens" />

      <main>
        <ListAchats allDocsData={allDocsData} />
      </main>

      <Footer className="" />
    </div>
  );
};

export const getStaticProps: GetStaticProps = async () => {
  const allDocsData = getSortedDocsData();
  return {
    props: {
      allDocsData,
    },
  };
};

export default Achats;
