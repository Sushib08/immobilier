import Link from "next/link";
import { FC } from "react";
import Image from "next/image";
import styled from "styled-components";

interface IReseaux {
  id: number;
  source: string;
  link: string;
}

let donneReseau: IReseaux[] = [
  { id: 0, source: "/instagram.svg", link: "https://www.instagram.com/?hl=fr" },
  { id: 1, source: "/facebook.svg", link: "https://www.facebook.com/" },
  { id: 3, source: "/pinterest.svg", link: "https://www.pinterest.fr/" },
];

interface IMenu {
  className?: string;
}
const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const ReseauxSocial = styled.div`
  display: flex;
`;
const Icon = styled.span`
  width: 30px;
  height: 30px;
  margin: 6px;
`;
const Juridiction = styled.div`
  font-size: 10px;
`;

const Footer: FC<IMenu> = ({ className, ...props }) => {
  return (
    <Container {...props}>
      <ReseauxSocial>
        {donneReseau.map((reseaux) => (
          <Icon key={reseaux.id}>
            <Link href={reseaux.link}>
              <a>
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
          </Icon>
        ))}
      </ReseauxSocial>
      <Juridiction>Tous droits réservé</Juridiction>
    </Container>
  );
};

export default Footer;
