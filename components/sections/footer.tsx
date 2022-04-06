import Link from "next/link";
import { FC } from "react";
import Image from "next/image";

interface IMenu {
  className: string;
}

const Footer: FC<IMenu> = ({ className, ...props }) => {
  const reseaux = Reseaux();
  return (
    <div className=" flex flex-col justify-center items-center md:flex-row mx-16" {...props}>
      <div className=" flex flex-row items-center my-6">
        {reseaux.map((reseaux) => (
          <Link key={reseaux.id} href={reseaux.link}>
            <a className=" flex-row mx-3 ">
              <Image
                priority
                src={reseaux.source}
                height={50}
                width={50}
                alt="heart"
                className=" hover:scale-95"
              />
            </a>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Footer;

interface IReseaux {
  id: number;
  source: string;
  link: string;
}

let reseaux: IReseaux[] = [
  { id: 0, source: "/instagram.svg", link: "https://www.instagram.com/?hl=fr" },
  { id: 1, source: "/facebook.svg", link: "https://www.facebook.com/" },
  { id: 3, source: "/pinterest.svg", link: "https://www.pinterest.fr/" },
];

function Reseaux() {
  return reseaux;
}
