import { FC } from "react";
import styled from "styled-components";

const Title = styled.h1`
    color : #C2AD74;
    font-size : 35px;
    font-weight: 600;
    font-family : "Arial";
`;

interface ITitle {
  text: string;
}

const Titre: FC<ITitle> = ({ text, ...props }) => {
  return (
      <Title {...props}>{text}</Title>
  );
};
export default Titre;
