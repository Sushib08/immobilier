import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/sections/header";
import Footer from "../components/sections/footer";
import styled from "styled-components";
import ListLocations from "../components/sections/listLocations";

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

const Locations: NextPage = () => {
  return (
    <div className={styles.container}>
      <Head>
        <title>ORTHIMMO - Locations</title>
      </Head>

      <Header className="liens" />

      <main>
        <ListLocations />
      </main>

      <Footer className="" />
    </div>
  );
};

export default Locations;
