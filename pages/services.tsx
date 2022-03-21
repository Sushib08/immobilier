import type { NextPage } from "next";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import Header from "../components/header";
import Image from "next/image";
import Footer from "../components/footer";
import styled from "styled-components";
import React, { useState , createRef } from "react";

const Input = styled.input`
  font-size: 25px;
  border: none;
  height: 35px;
  width: 200px;
  margin-left: 20px;
  margin-top: 30px;
  color: #707070;

  :focus {
    outline: none;
  }
`;

const Connexion = styled.button`
  font-size: 35px;
  margin-top: 50px;
  display: block;
  margin-left: auto;
  margin-right: auto;
  margin-top: 50px;
  border-radius: 50px;
  height: 60px;
  width: 250px;
  background-color: #c2ad74;
  border: none;
`;

const Services: NextPage = () => {
  const inputRef = createRef<HTMLInputElement>();

  let [words, setWords] = useState();

  let [button, setButton] = useState(false);

  const append = (value : any) => {
    if (value.trim()) {
      setWords(value);
      value = "";
      setButton(true);
    }
    console.log(value);
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>ORTHIMMO - Services clients</title>
      </Head>

      <header>
        <Header className={styles.liens} />
      </header>

      <main className={styles.main}>
        {!button ? (
          <div className=" h-2 -my-32">
            <h1 className=" flex items-center font-serif text-center text-[30px] font-semibold w-[700px] -mt-44">
              Pour accéder à votre espace Artimmo, utilisez vos identifiants
              habituels.
            </h1>
            <div
              className=" mt-10 w-[300px]"
              style={{
                borderBottom: "2px solid black",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            >
              <Image
                priority
                src="/user.svg"
                height={60}
                width={60}
                alt="users"
              />
              <Input placeholder="Identifiant" ref={inputRef}></Input>
            </div>
            <Connexion onClick={() => append(inputRef.current?.value)}>Connexion</Connexion>
          </div>
        ) : (
          ""
        )}
        <div className=" font-sans text-[80px] text-[#c2ad74] items-center text-center">{button ? <p className="text">Bienvenue {words}</p> : ""}</div>
      </main>

      <footer>
        <Footer className="" />
      </footer>
    </div>
  );
};

export default Services;
