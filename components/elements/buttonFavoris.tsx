import { FC, MouseEventHandler } from "react";
import styled from "styled-components";
import IconHeart from "../../public/heart";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #c2ad74;
  border-radius: 10px;
  height: 55px;
  width: 55px;
`;

interface IButton {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  background?: string;
  fill: string;
}

const ButtonFavoris: FC<IButton> = ({
  onClick,
  fill,
  background,
  ...props
}) => {
  return (
    <Button
      onClick={onClick}
      style={{ backgroundColor: `${background}` }}
      {...props}
    >
      <IconHeart fill={fill} />
    </Button>
  );
};
export default ButtonFavoris;
