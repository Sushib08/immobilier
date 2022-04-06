import Link from "next/link";
import { FC, useState } from "react";
import Image from "next/image";
import IconHeart from "../../public/heart";

interface IMenu {
  className: string;
}

const Header: FC<IMenu> = ({ className, ...props }) => {
  const [active, setActive] = useState(false);

  const handleClick = () => {
    setActive(!active);
  };
  const liens = Liens();
  const otherlinks = OtherLinks()
  return (
      <nav className=" w-full flex justify-between items-center flex-wrap">
        <Link href="/">
          <a>
            <Image
              priority
              src="/logoAgence.png"
              height={100}
              width={180}
              alt="Logo"
            />
          </a>
        </Link>
        <button
          className=" inline-flex p-3 hover:bg-[#C2AD74] rounded lg:hidden text-black ml-auto hover:text-white outline-none"
          onClick={handleClick}
        >
          <svg
            className="w-6 h-6"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>
        {/*Note that in this div we will use a ternary operator to decide whether or not to display the content of the div  */}
        <div
          className={`${
            active ? "" : "hidden"
          }   w-full flex lg:inline-flex lg:flex-grow lg:w-4/5 lg:items-center lg:justify-end lg: text-center`}
        >
          <div className=" w-full lg:w-3/5 flex flex-col items-center lg:flex-row justify-between">
            <div className=" flex flex-col lg:text-center lg:items-center lg:flex-row font-semibold ">
              {liens.map((liens) => (
                <Link key={liens.id} href={liens.link}>
                  <a className="text-2xl mx-6 hover:text-[#C2AD74]">
                    {liens.name}
                  </a>
                </Link>
              ))}
              <Link href="/favorites">
                <a className=" hover:scale-110 lg: mx-[auto]">
                  <IconHeart fill={"red"} />
                </a>
              </Link>
            </div>
            <div className=" flex flex-nowrap justify-center lg:items-center">
              {otherlinks.map((otherlinks) => (
                <Link key={otherlinks.id} href={otherlinks.link}>
                  <a className=" flex-row mr-4">
                    <Image
                      priority
                      src={otherlinks.source}
                      height={40}
                      width={40}
                      alt="links"
                      className=" hover:scale-95"
                    />
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
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

interface IOtherLinks {
  id: number;
  source: string;
  link: string;
}

let otherlinks: IOtherLinks[] = [
  { id: 0, source: "/histoire.svg", link: "/history" },
  { id: 1, source: "/services.svg", link: "/services" },
  { id: 3, source: "/agences.svg", link: "/agences" },
];

function OtherLinks() {
  return otherlinks;
}
