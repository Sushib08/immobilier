/* eslint-disable react/no-unescaped-entities */
import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";
import ButtonViewport from "../elements/buttonViewport";

const Description = styled.p`
  margin-top: 10px;
  color: #707070;
  max-width: 1000px;
  word-wrap: break-word;
`;

const ContentHistory: FC = ({ ...props }) => {
  return (
    <div className=" flex flex-col justify-between items-center">
      <Image
        priority
        src="/history.jpg"
        height={500}
        width={800}
        alt="links"
        className=" rounded-[30px]"
      />
      <div className="flex flex-col mt-8 lg:items-start">
        <h1 className=" text-5xl font-bold">Notre histoire - Notre parcours</h1>
        <Description>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500sLorem Ipsum is simply dummy text of the printing and
          typesetting industry. Lorem Ipsum has been the industry's standard
          dummy text ever since the 1500sLorem Ipsum is simply dummy text of the
          printing and typesetting industry. Lorem Ipsum has been the industry's
          standard dummy text ever since the 1500sLorem Ipsum is simply dummy
          text of the printing and typesetting industry. Lorem Ipsum has been
          the industry's standard dummy text ever since the 15Lorem Ipsum is
          simply dummy text of the printing and typesetting industry. Lorem
          Ipsum has been the industry's standard dummy text ever since the
          1500sLorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500sLorem Ipsum is simply dummy text of the printing and
          typesetting industry.
        </Description>
        <ButtonViewport
          link={"/recrutement"}
          text={"Recrutement"}
        ></ButtonViewport>
      </div>
    </div>
  );
};
export default ContentHistory;
