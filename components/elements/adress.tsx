import Link from "next/link";
import { FC } from "react";

interface IAdress {
  id: number;
  adress: string;
}

let data: IAdress[] = [
  { id: 0, adress: " Orthimmo Paris - 12 rue Cortot (75018)" },
  { id: 1, adress: "Orthimmo Lyon - 20 place de la République (69001)" },
  { id: 3, adress: "Orthimmo Toulon - 6 rue Hoche (83100)" },
  { id: 4, adress: " Orthimmo Nantes - 35 rue Voltaire (44100)" },
  { id: 5, adress: " Orthimmo Bordeaux - 2 avenue Ares (33200)" },
];

function listAdress() {
  return data;
}

const Adress: FC = ({ ...props }) => {
  const adress = listAdress();

  return (
    <div className=" mt-[10px]">
      {adress.map((item) => (
        <Link href="#" passHref key={item.id}>
          <a>
              <li className=" mb-2 hover:text-[#707070] list-none">{item.adress}</li>
          </a>
        </Link>
      ))}
    </div>
  );
};
export default Adress;

