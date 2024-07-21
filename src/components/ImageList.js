import React, { useContext } from "react";
import { ImageContext } from "../context/ImageContext";

const ImageList = () => {
  const [images] = useContext(ImageContext);
  const imgList = images.map((image) => (
    <img 
      key={image.imgUrl} 
      style={{ width: "30%" }} 
      src={`https://d2m32896w1lzfe.cloudfront.net/w140/${image.key}`}
    />
  ));

  return (
    <div>
      <h3>ImageList</h3>
        {imgList}
    </div>
  );
};

export default ImageList;