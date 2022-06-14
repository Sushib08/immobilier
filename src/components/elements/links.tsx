import Link from "next/link";
import { FC, Key, ReactChild, ReactFragment, ReactPortal } from "react";
import { UrlObject } from "url";
import IconHeart from "../../../public/heart";


interface Ilinks {
  liens: any;
}

const Links: FC<Ilinks> = ({ liens, ...props }) => {
  return (
    <div className=" flex flex-col lg:text-center lg:items-center lg:flex-row font-semibold ">
      {liens.map(
        (liens: {
          id: Key | null | undefined;
          link: string | UrlObject;
          name:
            | boolean
            | ReactChild
            | ReactFragment
            | ReactPortal
            | null
            | undefined;
        }) => (
          <Link key={liens.id} href={liens.link}>
            <a className="text-2xl mx-6 hover:text-[#C2AD74]">{liens.name}</a>
          </Link>
        )
      )}
      <Link href="/favorites">
        <a className=" hover:scale-110 lg: mx-[auto]">
          <IconHeart fill={"red"} />
        </a>
      </Link>
    </div>
  );
};
export default Links;
