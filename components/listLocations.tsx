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
    price: "1 500 €",
    path: "/image/locations/maison1.jpg",
    details: "/house1",
  },
  {
    id: 2,
    title: "Appart 3 pièces",
    localisation: "Roanne",
    price: "500€",
    path: "/image/locations/apart1.jpg",
    details: "/apart1",
  },
  {
    id: 3,
    title: "Studio",
    localisation: "Toulon",
    price: "400€",
    path: "/image/locations/studio1.jpg",
    details: "/studio1",
  },
  {
    id: 4,
    title: "Maison 4 pièces",
    localisation: "Paris",
    price: "1 300€",
    path: "/image/locations/maison2.jpg",
    details: "/house2",
  },
  {
    id: 5,
    title: "Maison 3 pièces",
    localisation: "Bordeaux",
    price: "1 000€",
    path: "/image/locations/maison3.jpg",
    details: "/house3",
  },
  {
    id: 6,
    title: "Maison 4 pièces",
    localisation: "Paris",
    price: "2 000€",
    path: "/image/locations/maison4.jpg",
    details: "/house6",
  },
  {
    id: 7,
    title: "Maison 3 pièces",
    localisation: "Saint-Etienne",
    price: "700€",
    path: "/image/locations/maison5.jpg",
    details: "/house7",
  },
  {
    id: 8,
    title: "Maison 5 pièces",
    localisation: "Nantes",
    price: "950€",
    path: "/image/locations/maison6.jpg",
    details: "/house8",
  },
];

const Locations: FC = ({ ...props }) => {
  const [searchParams, setSearchParams]: [IList[], (items: IList[]) => void] =
    React.useState(data);
  const [name, setName]: [string, (name: string) => void] = React.useState("");

  return (

      <div className="my-12">
        <div className="flex flex-col items-center md:flex-row justify-between mx-24">
        <h1 className=" text-[#C2AD74] text-[35px] font-semibold font-sans ">
          LOCATIONS
        </h1>
        <Input
          placeholder="Rechercher..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        </div>
        <ContentCard>
          {searchParams.map((locations) => {
            if (
              name == "" ||
              locations.title.toLowerCase().includes(name.toLowerCase())
            ) {
              return (
                <Card key={locations.id}>
                  <Link href={locations.details} passHref>
                    <a>
                      <Image
                        priority
                        src={locations.path}
                        height={320}
                        width={340}
                        alt="houses"
                        className=" overflow-hidden object-cover"
                      />
                    </a>
                  </Link>
                  <Description>
                    <h2 className=" text-[25px] font-semibold">
                      {locations.title}
                    </h2>
                    <div className=" text-[22px] mt-[2px] text-[#c2ad74]">
                      {locations.price}
                    </div>
                  </Description>
                  <div className=" ml-12 text-[20px] text-[#707070] mb-8">
                    {locations.localisation}
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

export default Locations;



