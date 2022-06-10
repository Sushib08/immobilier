import { FC } from "react";

interface IIconMessage {
  fill: string;
}

const IconMessage: FC<IIconMessage> = ({ fill }) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="22"
      height="22"
      viewBox="0 0 24 24"
    >
      <g
        id="vuesax_outline_sms"
        data-name="vuesax/outline/sms"
        transform="translate(-556 -252)"
      >
        <g id="sms">
          <path
            id="Vector"
            d="M15.75,18.5h-10C2.1,18.5,0,16.4,0,12.75v-7C0,2.1,2.1,0,5.75,0h10C19.4,0,21.5,2.1,21.5,5.75v7C21.5,16.4,19.4,18.5,15.75,18.5Zm-10-17C2.89,1.5,1.5,2.89,1.5,5.75v7C1.5,15.61,2.89,17,5.75,17h10C18.61,17,20,15.61,20,12.75v-7c0-2.86-1.39-4.25-4.25-4.25Z"
            transform="translate(557.25 254.75)"
            fill={fill}
          />
          <path
            id="Vector-2"
            data-name="Vector"
            d="M5.753,4.626a3.717,3.717,0,0,1-2.34-.79l-3.13-2.5a.747.747,0,1,1,.93-1.17l3.13,2.5a2.386,2.386,0,0,0,2.81,0l3.13-2.5a.738.738,0,0,1,1.05.12.738.738,0,0,1-.12,1.05l-3.13,2.5A3.67,3.67,0,0,1,5.753,4.626Z"
            transform="translate(562.247 260.244)"
            fill={fill}
          />
          <path
            id="Vector-3"
            data-name="Vector"
            d="M0,0H24V24H0Z"
            transform="translate(556 252)"
            fill="none"
            opacity="0"
          />
        </g>
      </g>
    </svg>
  );
};

export default IconMessage;
