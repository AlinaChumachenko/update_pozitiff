import React, { useState } from "react";
import { ButtonPopup } from "../Button/ButtonPopup";
import Image from "next/image";
import Popup from "../Popup/Popup";

const Block = ({
  title,
  imagePath,
  width,
  height,
  background,
  description,
  service,
}) => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const hundleTogglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };
  return (
    <div
      className={`relative max-w-lg h-119 mx-auto lg:mx-0 xl:w-full ${background}`}
    >
      <Popup
        isOpen={isPopupOpen}
        closePopup={hundleTogglePopup}
        title={title}
        description={description}
        service={service}
      />
      <div className="flex justify-between">
        <ButtonPopup toggleOpen={() => setIsPopupOpen(true)} />

        <h3 className="text-right mt-12 mr-12 text-3xl tracking-wide text-indigo-900">
          {title}
        </h3>
      </div>
      <div className="flex justify-center py-28">
        <Image src={imagePath} alt="Circles" width={width} height={height} />
      </div>
    </div>
  );
};

export default Block;
