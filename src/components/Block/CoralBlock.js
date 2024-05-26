import React, { useState } from "react";
import Image from "next/image";
import background from "@/images/coral.png";

import { ButtonPopup } from "@/components/Button/ButtonPopup.js";
import { CoralPopup } from "@/components/Popup/CoralPopup.js";

export const CoralBlock = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const hundleTogglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };
  return (
    <div className="relative max-w-lg h-119 mx-auto lg:mx-0 bg-gray-50">
      <CoralPopup isOpen={isPopupOpen} closePopup={hundleTogglePopup} />
      <div className="flex justify-between">
        <ButtonPopup toggleOpen={() => setIsPopupOpen(true)} />
        <h3 className="text-right mt-12 mr-12 text-3xl tracking-wide text-indigo-900">
          Coral Coalition
        </h3>
      </div>
      <div className="flex justify-center pt-28">
        <Image src={background} alt="Coral" width={555} height={476} />
      </div>
    </div>
  );
};
