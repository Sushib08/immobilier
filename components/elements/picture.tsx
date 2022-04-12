import Image from "next/image";
import { FC } from "react";


interface IPicture {
  source: string;
}

const Picture: FC <IPicture> = ({ source, ...props }) => {
  return (
    <div>
      <Image
        priority
        src={source}
        height={320}
        width={340}
        alt="houses"
      />
    </div>
  );
};
export default Picture;
