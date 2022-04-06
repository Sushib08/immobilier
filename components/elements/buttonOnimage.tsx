import Link from "next/link";
import Image from "next/image";
import { FC } from "react";
import styled from "styled-components";

const LittleView = styled.button`		
	position: relative;	
	padding: 10px;
	font-size: 10px;
	color: var(--inv);
	letter-spacing: 0.5rem;
	text-transform: uppercase;
	transition: all 500ms cubic-bezier(0.77, 0, 0.175, 1);	
	cursor: pointer;
	user-select: none;
    margin-top: 20px;
    border: 2px solid #C2AD74;


:before{
    content: '';
	position: absolute;	
	transition: inherit;
	z-index: -1;
	top: 0;
	width: 0;
	height: 100%;
	right: 0;
	border: 1px solid #707070;
	border-left: 0;
	border-right: 0;
}

:after{
	left: 0;
    content: '';
	position: absolute;	
	transition: inherit;
	z-index: -1;
	top: 0;
	width: 0;
	height: 100%;
}

:hover {
	color: white;
	transition-delay: .5s;
}

:hover:before {
	transition-delay: 0s;
	width: 100%;
}

:hover:after {
	background: #C2AD74;
	transition-delay: .45s;
	width: 100%;
}
`;

const Liens = styled.a`		

`;

interface ILittleViewport {
  link: string;
  text: string;
}

const ButtonOnImage: FC<ILittleViewport> = ({ link, text, ...props }) => {
  return (
	<Link href={link} passHref>
	<Liens>
	  <Image
		priority
		src={link}
		height={320}
		width={340}
		alt="houses"
		className=" overflow-hidden object-cover"
	  />
	  <ButtonOnImage link={link} text={"Viewport"}></ButtonOnImage>
	</Liens>
  </Link>
  );
};
export default ButtonOnImage;
