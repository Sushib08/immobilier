import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import ButtonFavoris from "./buttonFavoris";
import ButtonMessage from "./buttonMessage";
import styled from "styled-components";
import React, { useState } from "react";

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

const ContentCard = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 1500px;
  justify-content: space-around;
  margin-top: 50px;
  margin-bottom: 50px;
`;

const Card = styled.div`
  border: 3px solid #c2ad74;
  height: auto;
  width: 329px;
  height: 500px;
  border-radius: 49px;
  margin-top: 30px;
  overflow: hidden;
`;

const Description = styled.div`
  display: flex;
  justify-content: space-around;
  width: 300px;
  margin-bottom: 25px;
`;

const Ventes: FC = ({ ...props }) => {
  const ventes = list();
  
  const [searchParams, setSearchParams] = useState(ventes);
  const [name, setName] = useState('');
  const filter = (e: { target: { value: any; }; }) => {
    const keyword = e.target.value;

    if (keyword !== '') {
      const results = searchParams.filter((user) => {
        return user.title.toLowerCase().startsWith(keyword.toLowerCase());
        // Use the toLowerCase() method to make it case-insensitive
      });
      setSearchParams(results);
    } else {
      setSearchParams(searchParams);
      // If the text field is empty, show all searchParams
    }

    setName(keyword);
  };

  return (
    <div>
      <div className=" flex justify-between my-12 mx-24">
        <h1 className=" text-[#C2AD74] text-[35px] font-semibold font-sans ">
          VENTES
        </h1>
        <Input
          placeholder="Rechercher..."
          value={name}
          onChange={filter}
        />
      </div>
      <ContentCard {...props}>
        {ventes
          .map((ventes) => (
            <Card key={ventes.id}>
              <Link href={ventes.details} passHref>
                <Image
                  priority
                  src={ventes.path}
                  height={320}
                  width={340}
                  alt="houses"
                  className=" overflow-hidden object-cover"
                />
              </Link>
              <Description>
                <h2 className=" text-[25px] font-semibold">{ventes.title}</h2>
                <div className=" text-[22px] mt-[2px] text-[#c2ad74]">
                  {ventes.price}
                </div>
              </Description>
              <div className=" ml-12 text-[20px] text-[#707070] mb-8">
                {ventes.localisation}
              </div>
              <div className=" flex justify-end">
                <ButtonFavoris />
                <ButtonMessage />
              </div>
            </Card>
          ))}
      </ContentCard>
    </div>
  );
};

export default Ventes;

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
    price: "350 000 €",
    path: "/image/ventes/maison1.jpg",
    details: "/house1",
  },
  {
    id: 2,
    title: "Appart 3 pièces",
    localisation: "Roanne",
    price: "200 000€",
    path: "/image/ventes/apart1.jpg",
    details: "/apart1",
  },
  {
    id: 3,
    title: "Studio",
    localisation: "Toulon",
    price: "150 000€",
    path: "/image/ventes/studio1.jpg",
    details: "/studio1",
  },
  {
    id: 4,
    title: "Maison 4 pièces",
    localisation: "Paris",
    price: "300 000€",
    path: "/image/ventes/maison2.jpg",
    details: "/house2",
  },
  {
    id: 5,
    title: "Maison 4 pièces",
    localisation: "Bordeaux",
    price: "400 000€",
    path: "/image/ventes/maison3.jpg",
    details: "/house3",
  },
  {
    id: 6,
    title: "Maison 4 pièces",
    localisation: "Paris",
    price: "450 000€",
    path: "/image/ventes/maison4.jpg",
    details: "/house6",
  },
  {
    id: 7,
    title: "Maison 3 pièces",
    localisation: "Saint-Etienne",
    price: "250 500€",
    path: "/image/ventes/maison5.jpg",
    details: "/house7",
  },
  {
    id: 8,
    title: "Maison 5 pièces",
    localisation: "Nantes",
    price: "400 000€",
    path: "/image/ventes/maison6.jpg",
    details: "/house8",
  },
];

function list() {
  return data;
}
