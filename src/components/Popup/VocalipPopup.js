import React from "react";

import { ButtonProdject } from "@/components/Button/ButtonProdject.js";
import { ButtonClosePopup } from "@/components/Button/ButtonClosePopup.js";

export const VocalipPopup = ({ isOpen, closePopup }) => {
  return (
    <div
      className="absolute w-full h-full mx-auto p-12 bg-lime-500 bg-opacity-50 transition-all duration-100"
      style={{ display: isOpen ? "grid" : "none" }}
    >
      <ButtonClosePopup toggleOpen={closePopup} />
      <div className="text-right">
        <h3 className="text-3xl tracking-wide text-white mb-2.5">VOCALIP</h3>

        <p className="leading-6 text-white">Description about project</p>
      </div>
      <h2 className="flex self-center text-center mx-auto text-5xl text-white">
        Website design & code
      </h2>
      <ButtonProdject />
    </div>
  );
};
