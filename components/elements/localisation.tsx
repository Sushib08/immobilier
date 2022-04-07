import { FC } from "react";

interface ILocalisation {
  link: string;
}

const Localisation: FC<ILocalisation> = ({ link, ...props }) => {
  return (
    <div {...props} className=" ml-12 text-[20px] text-[#707070] mb-8"> 
    {link}
    </div>
  );
};
export default Localisation;
