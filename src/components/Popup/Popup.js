import React from "react";

import { ButtonClosePopup } from "@/components/Button/ButtonClosePopup.js";
import { ButtonProdject } from "@/components/Button/ButtonProdject.js";

const Popup = ({ isOpen, closePopup, title, description, service }) => {
  return (
    <div
      className="absolute w-full h-full mx-auto p-12 bg-lime-500 bg-opacity-50 transition-all duration-100"
      style={{ display: isOpen ? "grid" : "none" }}
    >
      <ButtonClosePopup toggleOpen={closePopup} />
      <div className="text-right">
        <h3 className="text-3xl tracking-wide text-white mb-2.5">{title}</h3>

        <p className="leading-6 text-white">{description}</p>
      </div>
      <h2 className="flex self-center text-center mx-auto text-5xl text-white">
        {service}
      </h2>
      <ButtonProdject />
    </div>
  );
};

export default Popup;
