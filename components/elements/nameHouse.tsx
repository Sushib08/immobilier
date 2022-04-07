import { FC } from "react";

interface INameHouse {
  link: string;
}

const NameHouse: FC<INameHouse> = ({ link, ...props }) => {
  return (
    <h2 {...props} className=" text-[25px] font-semibold"> 
    {link}
    </h2>
  );
};
export default NameHouse;
