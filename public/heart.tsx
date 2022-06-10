import { FC } from "react";

interface IIconHeart {
  fill: string;
}

const IconHeart: FC<IIconHeart> = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="20"
      height="20"
      viewBox="0 0 17.446 16.024"
    >
      <path
        id="Tracé_242"
        data-name="Tracé 242"
        d="M556.591,47.261a5.163,5.163,0,0,0-7.211-.086,5.163,5.163,0,0,0-7.3,7.3l.091.091,7.211,7.211,7.211-7.211c.03-.03.061-.061.086-.091A5.161,5.161,0,0,0,556.591,47.261Z"
        transform="translate(-540.657 -45.75)"
        fill={fill}
      />
    </svg>
  );
};

export default IconHeart;
