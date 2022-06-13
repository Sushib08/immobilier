import { FC } from "react";
import styled from "styled-components";
import styles from "../../styles/Home.module.css";
import React from "react";
import Picture from "../elements/picture";
import LittleViewport from "../elements/littleViewport";
import ButtonFavoris from "../elements/buttonFavoris";
import ButtonMessage from "../elements/buttonMessage";
import error from "next/error";
import { getSortedDocsData } from "../../lib/achats";
import NavLink from "../elements/NavLinks";

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
  color: #c2ad74;
`;

const Localisation = styled.h3`
  margin-left: 50px;
  font-size: 20px;
  margin-bottom: 30px;
  color: #707070;
`;

let data = [
  {
    id: 1,
    title: "Maison 5 pièces",
    localisation: "Lyon",
    price: "250 000€",
    path: "/image/achats/maison1.jpg",
    details: "/achats/maisonChic",
    stateFavoris: false,
  },
  {
    id: 2,
    title: "Appart 3 pièces",
    localisation: "Lyon",
    price: "200 000€",
    path: "/image/achats/apart1.jpg",
    details: "/achats/appartBohem",
    stateFavoris: false,
  },
  {
    id: 3,
    title: "Studio",
    localisation: "Toulon",
    price: "180 000€",
    path: "/image/achats/studio1.jpg",
    details: "/achats/studio",
    stateFavoris: false,
  },
  {
    id: 4,
    title: "Maison 3 pièces",
    localisation: "Paris",
    price: "300 000€",
    path: "/image/achats/maison2.jpg",
    details: "/achats/maisonClasse",
    stateFavoris: false,
  },
  {
    id: 5,
    title: "Maison 3 pièces",
    localisation: "Bordeaux",
    price: "150 000€",
    path: "/image/achats/maison3.jpg",
    details: "/achats/maisonIsole",
    stateFavoris: false,
  },
  {
    id: 6,
    title: "Maison 4 pièces",
    localisation: "Paris",
    price: "450 000€",
    path: "/image/achats/maison4.jpg",
    details: "/achats/villa",
    stateFavoris: false,
  },
  {
    id: 7,
    title: "Maison 4 pièces",
    localisation: "Saint-Etienne",
    price: "250 000€",
    path: "/image/achats/maison5.jpg",
    details: "/achats/maisonBienEtre",
    stateFavoris: false,
  },
  {
    id: 8,
    title: "Maison 5 pièces",
    localisation: "Nantes",
    price: "400 000€",
    path: "/image/achats/maison6.jpg",
    details: "/achats/Chateau",
    stateFavoris: false,
  },
];

interface IAllDocs {
  allDocsData: ReturnType<typeof getSortedDocsData>;
}

const Achats: FC<IAllDocs> = (props) => {
  const { allDocsData } = props;
  const [searchParams, setSearchParams] = React.useState(allDocsData);
  const [name, setName] = React.useState("");

  const filter = (e: { target: { value: any } }) => {
    const keyword = e.target.value;

    if (keyword !== "") {
      const results = allDocsData.filter((item) => {
        return item.title.toLowerCase().includes(keyword.toLowerCase());
      });
      setSearchParams(results);
    } else {
      setSearchParams(allDocsData);
    }

    setName(keyword);
  };

  const checkedFavoris = (id: string) => {
    const foundFavoris = searchParams.find((item) => item.id === id);
    if (foundFavoris) {
      // foundFavoris.stateFavoris = !foundFavoris.stateFavoris;
      setSearchParams([...searchParams]);
      console.log(foundFavoris);
    }
  };

  return (
    <div className="my-12" {...props}>
      <div className="flex flex-col items-center md:flex-row justify-between mx-24">
        <Title>ACHATS</Title>
        <Input placeholder="Rechercher..." value={name} onChange={filter} />
      </div>
      <ContentCard {...props}>
        {searchParams && searchParams.length > 0 ? (
          searchParams.map((item) => (
            <Card key={item.id}>
              <div className={styles.content}>
                <NavLink href={`/achats/${item.id}`}>
                  <Picture
                    source={`/image/achats/${item.imgPath}`}
                    alt={item.title}
                  />
                </NavLink>
                <div className={styles.btn}>
                  {/* <LittleViewport
                    link={item.path}
                    text={"Viewport"}
                    className="little"
                  /> */}
                </div>
              </div>
              <Description>
                <LodgmentTitle>{item.title}</LodgmentTitle>
                <Price>{item.price}</Price>
              </Description>
              <Localisation>{item.city}</Localisation>
              <div className=" flex justify-end mb-4 mx-8 ">
                <div className=" mx-1">
                  <ButtonFavoris
                    fill={"#EEEE"}
                    onClick={() => checkedFavoris(item.id)}
                  />
                </div>
                <div className=" mx-1">
                  <ButtonMessage fill="" />
                </div>
              </div>
            </Card>
          ))
        ) : (
          <p>{error}</p>
        )}
      </ContentCard>
    </div>
  );
};

export default Achats;
