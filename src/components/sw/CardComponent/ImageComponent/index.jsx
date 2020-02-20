import React, { useState, useEffect } from "react";

import "./style.scss";

export default function ImageComponent(props) {
  // сюда только url до картинки в интернете
  // и все!!!
  const {
    nameObj = "",
    getImage = null,
    imageUrl = "",
    currentCategory
  } = props;

  const [isImageUrl, setIsImageUrl] = useState(imageUrl);
  useEffect(() => {
    if (!isImageUrl) {
      return;
    }

    setIsImageUrl(imageUrl);
  }, [imageUrl]);

  useEffect(() => {
    if (!getImage) {
      return;
    }

    getImage(nameObj);
  }, [getImage]);

  const getImageComponent = () => {
    return <image className={"image"} src={isImageUrl} />;
  };

  const getLoaderComponent = () => {
    return (
      <div className={"loader-image"}>
        <div className={"loader-animate"} />
      </div>
    );
  };

  return (
    <div className="imageContainer">
      {isImageUrl ? getImageComponent() : getLoaderComponent()}
    </div>
  );
}
