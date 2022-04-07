import { FC } from "react";

interface IPrice {
  link: string;
}

const Price: FC<IPrice> = ({ link, ...props }) => {
  return (
    <div {...props} className=" text-[22px] mt-[2px] text-[#c2ad74]"> 
    {link}
    </div>
  );
};
export default Price;
