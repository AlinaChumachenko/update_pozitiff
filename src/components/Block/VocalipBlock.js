import React, { useState } from "react";
import Image from "next/image";
import FonImages from "@/images/ill_hero.png";
import { VocalipPopup } from "@/components/Popup/VocalipPopup";
import { ButtonPopup } from "@/components/Button/ButtonPopup";

export const VocalipBlock = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const hundleTogglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };
  return (
    <div className="relative max-w-lg h-119 mx-auto lg:mx-0 bg-gradient-to-t from-violet-300 from-30% bg-gray-50 to-45%">
      <VocalipPopup isOpen={isPopupOpen} closePopup={hundleTogglePopup} />
      <div className="flex justify-between">
        <ButtonPopup toggleOpen={() => setIsPopupOpen(true)} />
        <h3 className="text-right mt-12 mr-12 text-3xl tracking-wide text-indigo-900">
          VOCALIP
        </h3>
      </div>
      <div className="flex justify-center py-28">
        <Image src={FonImages} alt="Schedule" width={555} height={226} />
      </div>
    </div>
  );
};
