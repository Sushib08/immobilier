import Image from "next/image";
import { FC } from "react";

interface IImage {
  link: string;
}

const Images: FC<IImage> = ({ link, ...props }) => {
  return (
    <a {...props}>
      <Image
        priority
        src={link}
        height={320}
        width={340}
        alt="houses"
        className=" overflow-hidden object-cover"
      />
    </a>
  );
};
export default Images;
