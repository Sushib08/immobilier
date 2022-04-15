import Image from "next/image";
import Link from "next/link";
import { FC } from "react";
import styled from "styled-components";
import Adress from "../elements/adress";
import ButtonViewport from "../elements/buttonViewport";

const Description = styled.p`
  margin-top: 10px;
  color : #707070;
`;


const ContentIndex: FC = ({ ...props }) => {
  return (
    <div className=" flex flex-col lg:flex-row justify-between items-center">
    <Link href="/exclu">
      <a className="">
        <Image
          priority
          src="/test.png"
          height={900}
          width={1100}
          alt="links"
          className=" hover:scale-105 rounded-[30px]"
        />
      </a>
    </Link>
    <div className="flex flex-col lg:ml-20 mt-8 lg:m-0 lg:items-start">
      <h1 className=" text-7xl font-bold">
        Exclusivité Chateau <br /> Bellefont
      </h1>
      <h2 className=" mt-5 font-medium text-4xl ">House Holiday</h2>
      <Description>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industrys standard dummy text
        ever since the 1500s
      </Description>
      <ButtonViewport link={"/exclu"} text={"Viewport"}></ButtonViewport>
    </div>
  </div>
  );
};
export default ContentIndex;
