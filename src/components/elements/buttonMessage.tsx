import { FC, MouseEventHandler } from "react";
import styled from "styled-components";
import IconMessage from "../../../public/message";

const Button = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  // border: 1px solid #c2ad74;
  background-color: #f8f8f8;
  border-radius: 8px;
  height: 40px;
  width: 40px;
`;

interface IButton {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
  background?: string;
  fill: string;
  tw?: string;
}

const ButtonMessage: FC<IButton> = ({
  onClick,
  fill,
  tw,
  background,
  ...props
}) => {
  return (
    <Button
      onClick={onClick}
      style={{ backgroundColor: `${background}` }}
      className={tw}
      {...props}
    >
      <IconMessage fill={fill} />
    </Button>
  );
};
export default ButtonMessage;
