import { FC, MouseEventHandler } from "react";
import styled from "styled-components";

const Button = styled.button`
  padding: 12px;
  border-radius: 5px;
  color: black;
  margin-left: auto;
  outline: 2px solid transparent;
  outline-offset: 2px;

  :hover {
    background-color: #c2ad74;
    color: white;
  }

  } 
`;

interface IDropMenu {
  onClick?: MouseEventHandler<HTMLButtonElement> | undefined;
}

const DropMenu: FC<IDropMenu> = ({ onClick, ...props }) => {
  return (
    <Button {...props} onClick={onClick} className="inline-flex  lg:hidden">
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
    </Button>
  );
};
export default DropMenu;
