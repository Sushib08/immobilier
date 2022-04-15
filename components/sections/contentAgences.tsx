import Image from "next/image";
import { FC } from "react";
import Adress from "../elements/adress";


const ContentAgences: FC = ({ ...props }) => {
  return (
    <div {...props} className=" flex flex-col lg:flex-row justify-between items-center">
    <Image priority src="/map.png" height={550} width={600} alt="users" />

    <div className="flex flex-col lg:ml-20 mt-8 lg:m-0 lg:items-start">
      <h1 className=" text-5xl font-bold mb-10">
        Nos agences 
      </h1>
      <Adress />
    </div>
  </div>
  );
};
export default ContentAgences;
