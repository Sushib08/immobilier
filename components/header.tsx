import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import IconHeart from "../public/heart";

interface IMenu {
  className: string;
}

const Header: FC<IMenu> = ({ className, ...props }) => {
  const liens = Liens();
  return (
    <div className=" flex flex-col items-center justify-between md:flex-row" {...props}>
      <Link href="/">
        <a>
          <Image
            priority
            src="/logoAgence.png"
            height={120}
            width={200}
            alt="Logo"
          />
        </a>
      </Link>
      <div className=" flex flex-col items-center justify-between md:flex-row mx-8">
        <div className=" flex flex-col items-center md:flex-row mx-24 font-semibold ">
          {liens.map((liens) => (
            <Link key={liens.id} href={liens.link}>
              <a className="text-3xl mx-6 hover:text-[#C2AD74]">{liens.name}</a>
            </Link>
          ))}
          <Link href="/favorites">
            <a className=" hover:scale-110">
            <IconHeart fill={"red"} />
            </a>
          </Link>
        </div>
        <button className=" -mt-2">
          <Image priority src="/menu.svg" height={60} width={60} alt="menu" />
        </button>
      </div>
    </div>
  );
};

export default Header;

interface ILiens {
  id: number;
  name: string;
  link: string;
}

let data: ILiens[] = [
  { id: 0, name: "Achats", link: "/achats" },
  { id: 1, name: "Ventes", link: "/ventes" },
  { id: 3, name: "Locations", link: "/locations" },
];

function Liens() {
  return data;
}
