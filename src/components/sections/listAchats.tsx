import { FC } from "react";
import styled from "styled-components";
import styles from "../../../styles/Home.module.css";
import React from "react";
import Picture from "../elements/picture";
import ButtonFavoris from "../elements/buttonFavoris";
import ButtonMessage from "../elements/buttonMessage";
import error from "next/error";
import { getSortedDocsData } from "../../lib/posts";
import NavLink from "../elements/NavLink";

const Header = styled.div``;

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

const ContentCard = styled.div``;

const Card = styled.div`
  border: 0.01em solid #c2ad74;
  width: 290px;
  height: 440spx;
  border-radius: 30px;
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
  width: 300px;
`;

const Title = styled.h1`
  color: #c2ad74;
  font-weight: 600;
`;

const LodgmentTitle = styled.h2`
  font-weight: 600;
`;

const Price = styled.h3`
  font-weight: 600;
  color: #c2ad74;
`;

const Localisation = styled.h3`
  color: #707070;
`;

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
    <div className="my-12 flex flex-col justify-center items-center" {...props}>
      <Header className="w-full flex justify-center">
        <div className=" w-4/5 flex justify-between">
          <Title>ACHATS</Title>
          <Input placeholder="Rechercher..." value={name} onChange={filter} />
        </div>
      </Header>
      <ContentCard
        className="w-full flex justify-center items-center my-6"
        {...props}
      >
        <div className="w-4/5 grid grid-cols-1  gap-10 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {searchParams && searchParams.length > 0 ? (
            searchParams.map((item) => (
              <div key={item.id} className="w-full flex justify-center">
                <Card >
                  <NavLink href={`/achats/${item.id}`}>
                    <div className="overflow-hidden">
                      <Picture
                        source={`/image/achats/${item.imgPath}`}
                        alt={item.title}
                      />
                    </div>
                    <div className="w-full relative flex justify-between flex-col  p-4">
                      <Description className="flex flex-col text-lg">
                        <LodgmentTitle className="">{item.title}</LodgmentTitle>
                        <Price>{item.price}</Price>
                      </Description>
                      <Localisation>{item.city}</Localisation>

                      <div className=" flex mt-4">
                        <ButtonFavoris
                          fill={"#ccc"}
                          onClick={() => checkedFavoris(item.id)}
                          tw="mr-2"
                        />
                        <ButtonMessage fill="" />
                      </div>
                    </div>
                  </NavLink>
                </Card>
              </div>
            ))
          ) : (
            <p>{error}</p>
          )}
        </div>
      </ContentCard>
    </div>
  );
};

export default Achats;
