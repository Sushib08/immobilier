import Link from "next/link";
import { FC } from "react";
import Image from "next/image";

interface IMenu {
  className: string;
}

const Header: FC<IMenu> = ({ className, ...props }) => {
  const liens = Liens();
  return (
    <div className=" flex justify-between" {...props}>
      <Link href="/">
        <a>
          <Image
            priority
            src="/logoAgence.png"
            height={100}
            width={200}
            alt="Logo"
          />
        </a>
      </Link>
      <div className=" flex justify-between mx-8">
        <div className="mx-24 mt-4 text-gray-400 ">
          {liens.map((liens) => (
            <Link key={liens.id} href={liens.link}>
              <a className=" text-3xl flex-row mx-6 hover:text-[#C2AD74]  ">{liens.name}</a>
            </Link>
          ))}
          <Link href="/favorites">
            <a>
              <Image
                priority
                src="/heart.svg"
                height={35}
                width={35}
                alt="heart"
                className=" hover:scale-110"
              />
            </a>
          </Link>
        </div>
        <button className=" -mt-6">
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
