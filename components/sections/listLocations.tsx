import { FC } from "react";
import styled from "styled-components";
import React from "react";
import Cards from "../elements/card";

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

  .little {
    display: none;
  }

  :hover {
    .little {
      display: block;
    }
  }
`;

const Description = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  width: 300px;
  margin-bottom: 25px;
`;

const Title = styled.h1`
  font-size: 36px;
  color: #c2ad74;
  font-family: "Segoe UI";
  font-weight: 600;
  letter-spacing: 0.5rem;
`;

const LodgmentTitle = styled.h2`
  font-size: 25px;
  font-weight: 600;
`;

const Price = styled.h3`
  font-size: 22px;
  font-weight: 600;
  margin-top: 2px;
  color : #C2AD74;
`;

const Localisation = styled.h3`
  margin-left : 50px;
  font-size: 20px;
  margin-bottom: 30px;
  color : #707070;
`;

interface IList {
  id: number;
  title: string;
  localisation: string;
  price: string;
  path: string;
  details: string;
  stateFavoris: boolean;
}

let data: IList[] = [
  {
    id: 1,
    title: "Maison 5 pièces",
    localisation: "Lyon",
    price: "1 500 €",
    path: "/image/locations/maison1.jpg",
    details: "/house1",
    stateFavoris: false,
  },
  {
    id: 2,
    title: "Appart 3 pièces",
    localisation: "Roanne",
    price: "500€",
    path: "/image/locations/apart1.jpg",
    details: "/apart1",
    stateFavoris: false,
  },
  {
    id: 3,
    title: "Studio",
    localisation: "Toulon",
    price: "400€",
    path: "/image/locations/studio1.jpg",
    details: "/studio1",
    stateFavoris: false,
  },
  {
    id: 4,
    title: "Maison 4 pièces",
    localisation: "Paris",
    price: "1 300€",
    path: "/image/locations/maison2.jpg",
    details: "/house2",
    stateFavoris: false,
  },
  {
    id: 5,
    title: "Maison 3 pièces",
    localisation: "Bordeaux",
    price: "1 000€",
    path: "/image/locations/maison3.jpg",
    details: "/house3",
    stateFavoris: false,
  },
  {
    id: 6,
    title: "Maison 4 pièces",
    localisation: "Paris",
    price: "2 000€",
    path: "/image/locations/maison4.jpg",
    details: "/house6",
    stateFavoris: false,
  },
  {
    id: 7,
    title: "Maison 3 pièces",
    localisation: "Saint-Etienne",
    price: "700€",
    path: "/image/locations/maison5.jpg",
    details: "/house7",
    stateFavoris: false,
  },
  {
    id: 8,
    title: "Maison 5 pièces",
    localisation: "Nantes",
    price: "950€",
    path: "/image/locations/maison6.jpg",
    details: "/house8",
    stateFavoris: false,
  },
];

const Locations: FC = ({ ...props }) => {
  const [searchParams, setSearchParams]: [IList[], (items: IList[]) => void] =
    React.useState(data);
  const [name, setName]: [string, (name: string) => void] = React.useState("");

  const filter = (e: { target: { value: any } }) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = data.filter((item) => {
        return item.title.toLowerCase().includes(keyword.toLowerCase());
      });
      setSearchParams(results);
    } else {
      setSearchParams(data);
    }

    setName(keyword);
  };

  const checkedFavoris = (id: number) => {
    const foundFavoris = searchParams.find((item) => item.id === id);
    if (foundFavoris) {
      foundFavoris.stateFavoris = !foundFavoris.stateFavoris;
      setSearchParams([...searchParams]);
      console.log(foundFavoris);
    }
  };

  return (
    <div className="my-12">
      <div className="flex flex-col items-center md:flex-row justify-between mx-24">
        <Title> LOCATIONS</Title>
        <Input placeholder="Rechercher..." value={name} onChange={filter} />
      </div>
      <Cards searchParams={searchParams} lodgment={data} checkedFavoris={checkedFavoris} />
    </div>
  );
};

export default Locations;
