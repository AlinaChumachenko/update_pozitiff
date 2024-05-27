import React from "react";
import { ButtonCloseModal } from "@/components/Button/ButtonCloseModal.js";
import { ButtonSendForm } from "@/components/Button/ButtonSendForm.js";

export const UserForm = ({ isOpen, closeModal }) => {
  const handleSubmit = (event) => {
    preventDefault();
  };
  return (
    <div>
      <div
        className={`fixed top-0 left-0 w-full h-full bg-lime-500 bg-opacity-50 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <div
          className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-50 w-full max-w-[409px] bg-slate-400 p-5"
          style={{ display: isOpen ? "block" : "none" }}
        >
          <div className="flex justify-between">
            <ButtonSendForm />
            <ButtonCloseModal toggleOpen={closeModal} />
          </div>
          <form onSubmit={handleSubmit} className="flex flex-col gap-2.5 mt-1">
            <label>
              <input
                className="w-full h-12 p-2.5 font-lato hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-white"
                type="text"
                name="name"
                placeholder="Your Name..."
                pattern="^(?! )[^0-9]+$"
                title="Name may contain only letters, apostrophe, dash and spaces."
                required
              />
            </label>
            <label>
              <input
                className="w-full h-12 p-2.5 font-lato hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-white"
                type="email"
                name="email"
                placeholder="Your Email ..."
                pattern="^[^\s]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix."
              />
            </label>
            <label>
              <input
                className="w-full h-12 p-2.5 font-lato hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-white"
                type="tel"
                name="tel"
                placeholder="Your Contact Number +XXXXXXX..."
                pattern="^\+\d{7,}$"
                title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
                required
              />
            </label>
            <label>
              <textarea
                className="w-full h-[109px] p-2.5 font-lato hover:outline hover:outline-2 hover:outline-offset-2 hover:outline-white"
                name="message"
                rows="8"
                placeholder="Enter you message here..."
              ></textarea>
            </label>
          </form>
        </div>
      </div>
    </div>
  );
};
