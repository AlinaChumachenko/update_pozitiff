import React, { useState } from "react";
import Image from "next/image";
import background from "@/images/group.png";
import { ButtonPopup } from "@/components/Button/ButtonPopup.js";
import { LogicomPopup } from "@/components/Popup/LogicomPopup.js";

export const LogicomBlock = () => {
  const [isPopupOpen, setIsPopupOpen] = useState(false);
  const hundleTogglePopup = () => {
    setIsPopupOpen((prev) => !prev);
  };
  return (
    <div className="relative max-w-lg h-119 mx-auto lg:mx-0 bg-gradient-to-t from-stone-300 to-stone-100">
      <LogicomPopup isOpen={isPopupOpen} closePopup={hundleTogglePopup} />
      <div className="flex justify-between">
        <ButtonPopup toggleOpen={() => setIsPopupOpen(true)} />
        <h3 className="text-right mt-12 mr-12 text-3xl tracking-wide text-indigo-900">
          LOGICOM
        </h3>
      </div>
      <div className="flex justify-center p-28">
        <Image src={background} alt="Schedule" width={267} height={215} />
      </div>
    </div>
  );
};
