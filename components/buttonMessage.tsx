import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";

const Button = styled.button`
  border : 3px solid #c2ad74;
  border-radius: 15px;
  height: 55px;
  width: 55px;
  margin-right: 40px;
`;


const ButtonMessage: FC = ({ ...props }) => {
  return (
    <Button {...props}>
      <Link href="" passHref>
        <Image priority src="/message.svg" height={30} width={30} alt="message" />
      </Link>
    </Button>
  );
};
export default ButtonMessage;
