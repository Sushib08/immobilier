/* eslint-disable react/require-default-props */
/* eslint-disable import/no-absolute-path */
import Link from "next/link";
import { FC, FocusEventHandler, ReactNode } from "react";

interface INavLink {
  href: string;
  onFocus?: FocusEventHandler<HTMLAnchorElement> | undefined;
}
// eslint-disable-next-line object-curly-newline
const NavLink: FC<INavLink> = ({ href, children, onFocus, ...props }) => (
  <>
    <Link href={href} passHref>
      <a onFocus={onFocus} {...props}>
        {children}
      </a>
    </Link>
  </>
);
export default NavLink;
