import { FC } from "react";
import styled from "styled-components";


interface IBigImage {
  className?:string;
}

const BigImage: FC<IBigImage> = ({className, ...props }) => {
  return (
    <div
      {...props}
      style={{
        width: "100%",
        height: "100vh",
        WebkitBackgroundSize: "cover",
        backgroundPosition: "center center",
        borderRadius: "30px",
      }}
      className={className}
    />
  );
};
export default BigImage;