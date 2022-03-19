import Link from "next/link";
import { FC } from "react";
import Image from "next/image";

interface IMenu {
  className: string;
}

const Footer: FC<IMenu> = ({ className, ...props }) => {
  const liens = Liens();
  const reseaux = Reseaux();
  return (
    <div className=" flex justify-between mx-16" {...props}>
      <div className=" flex justify-between my-8 text-gray-400 font-semibold">
        {liens.map((liens) => (
          <Link key={liens.id} href={liens.link}>
            <a className=" text-3xl flex-row mx-6 hover:text-[#C2AD74]">
              {liens.name}
            </a>
          </Link>
        ))}
      </div>
      <div className="my-6">
        {reseaux.map((reseaux) => (
          <Link key={reseaux.id} href={reseaux.link}>
            <a className=" flex-row mx-3">
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

interface ILiens {
  id: number;
  name: string;
  link: string;
}

let data: ILiens[] = [
  { id: 0, name: "Notre histoire", link: "/history" },
  { id: 1, name: "Services clients", link: "/services" },
  { id: 3, name: "Nos agences", link: "/agences" },
];

function Liens() {
  return data;
}

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
