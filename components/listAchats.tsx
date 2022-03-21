import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import ButtonFavoris from "./buttonFavoris";
import ButtonMessage from "./buttonMessage";
import styled from "styled-components";
import React, { useState } from "react";
import error from "next/error";

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

  :hover {
    border: 1px solid #c2ad74;
  }
`;

const ContentCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Card = styled.div`
  border: 3px solid #c2ad74;
  height: auto;
  width: 345px;
  border-radius: 49px;
  margin-top: 30px;
  overflow: hidden;
`;

const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 300px;
  margin-bottom: 25px;
`;

interface IList {
  id: number;
  title: string;
  localisation: string;
  price: string;
  path: string;
  details: string;
}

let data: IList[] = [
  {
    id: 1,
    title: "Maison 5 pièces",
    localisation: "Lyon",
    price: "250 000€",
    path: "/image/achats/maison1.jpg",
    details: "/achatHouse1",
  },
  {
    id: 2,
    title: "Appart 3 pièces",
    localisation: "Lyon",
    price: "200 000€",
    path: "/image/achats/apart1.jpg",
    details: "/achats/house2",
  },
  {
    id: 3,
    title: "Studio",
    localisation: "Toulon",
    price: "180 000€",
    path: "/image/achats/studio1.jpg",
    details: "/achats/house3",
  },
  {
    id: 4,
    title: "Maison 3 pièces",
    localisation: "Paris",
    price: "300 000€",
    path: "/image/achats/maison2.jpg",
    details: "/achats/house4",
  },
  {
    id: 5,
    title: "Maison 3 pièces",
    localisation: "Bordeaux",
    price: "150 000€",
    path: "/image/achats/maison3.jpg",
    details: "/achats/house5",
  },
  {
    id: 6,
    title: "Maison 4 pièces",
    localisation: "Paris",
    price: "450 000€",
    path: "/image/achats/maison4.jpg",
    details: "/achats/house6",
  },
  {
    id: 7,
    title: "Maison 4 pièces",
    localisation: "Saint-Etienne",
    price: "250 000€",
    path: "/image/achats/maison5.jpg",
    details: "/achats/house7",
  },
  {
    id: 8,
    title: "Maison 5 pièces",
    localisation: "Nantes",
    price: "400 000€",
    path: "/image/achats/maison6.jpg",
    details: "/achats/house8",
  },
];

const Achats: FC = ({ ...props }) => {
  const [searchParams, setSearchParams]: [IList[], (items: IList[]) => void] =
    React.useState(data);
  const [name, setName]: [string, (name: string) => void] = React.useState("");

  return (

      <div className="my-12">
        <div className="flex flex-col items-center md:flex-row justify-between mx-24">
        <h1 className=" text-[#C2AD74] text-[35px] font-semibold font-sans ">
          ACHATS
        </h1>
        <Input
          placeholder="Rechercher..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>
        <ContentCard>
          {searchParams.map((achats) => {
            if (
              name == "" ||
              achats.title.toLowerCase().includes(name.toLowerCase())
            ) {
              return (
                <Card key={achats.id}>
                  <Link href={achats.details} passHref>
                    <a>
                      <Image
                        priority
                        src={achats.path}
                        height={320}
                        width={340}
                        alt="houses"
                        className=" overflow-hidden object-cover"
                      />
                    </a>
                  </Link>
                  <Description>
                    <h2 className=" text-[25px] font-semibold">
                      {achats.title}
                    </h2>
                    <div className=" text-[22px] mt-[2px] text-[#c2ad74]">
                      {achats.price}
                    </div>
                  </Description>
                  <div className=" ml-12 text-[20px] text-[#707070] mb-8">
                    {achats.localisation}
                  </div>
                  <div className=" flex justify-end mb-4">
                <ButtonFavoris />
                <ButtonMessage />
              </div>
                </Card>
              );
            }
          })}
        </ContentCard>
        {error && <p>{error}</p>}
      </div>
  );
};

export default Achats;
