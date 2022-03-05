import { useProgressiveImg } from "../utils/helper";
const ProgressiveImg = ({ image, className, alt, ...props }) => {
  const [src, { blur }] = useProgressiveImg(image);

  const blurStyles = {
    filter: blur ? "blur(20px)" : "none",
    transition: blur ? "none" : "filter 0.3s ease-out",
    clipPath: "inset(0)",
  };

  return (
    <img
      className={`${className} ${blurStyles}`}
      src={src}
      alt={alt}
      {...props}
    />
  );
};

export default ProgressiveImg;
