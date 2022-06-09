import Image from "next/image";
import { FC } from "react";


interface IPicture {
  source: string;
  alt : string;
}

const Picture: FC <IPicture> = ({ alt, source, ...props }) => {
  return (
    <div>
      <Image
        priority
        src={source}
        height={320}
        width={340}
        alt={alt}
      />
    </div>
  );
};
export default Picture;
