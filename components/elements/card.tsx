import error from "next/error";
import { FC } from "react";
import ButtonFavoris from "./buttonFavoris";
import ButtonMessage from "./buttonMessage";
import styled from "styled-components";
import styles from "../../styles/Home.module.css";
import LittleViewport from "./littleViewport";
import Picture from "./picture";

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

interface IArea {
  id: number;
  price: string;
  localisation: string;
  stateFavoris: boolean;
  details: string;
  path:string;
  title: string;
}

interface ICards {
  searchParams: any;
  lodgment: IArea[];
  checkedFavoris: any;
}

const Cards: FC<ICards> = ({
  checkedFavoris,
  lodgment,
  searchParams,
  ...props
}) => {
  return (
    <ContentCard {...props}>
      {searchParams && searchParams.length > 0 ? (
        searchParams.map(
          (lodgment: IArea) => (
            <Card key={lodgment.id}>
              <div className={styles.content}>
                <Picture source={lodgment.path} />
                <div className={styles.btn}>
                  <LittleViewport
                    link={lodgment.details}
                    text={"Viewport"}
                    className="little"
                  />
                </div>
              </div>
              <Description>
                <LodgmentTitle>{lodgment.title}</LodgmentTitle>
                <Price>{lodgment.price}</Price>
              </Description>
              <Localisation>{lodgment.localisation}</Localisation>
              <div className=" flex justify-end mb-4 mx-8 ">
                <div className=" mx-1">
                  <ButtonFavoris
                    fill={lodgment.stateFavoris ? "red" : "#ddd"}
                    onClick={() => checkedFavoris(lodgment.id)}
                  />
                </div>
                <div className=" mx-1">
                  <ButtonMessage fill="" />
                </div>
              </div>
            </Card>
          )
        )
      ) : (
        <p>{error}</p>
      )}
    </ContentCard>
  );
};
export default Cards;
