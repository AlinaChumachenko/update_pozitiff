import React, { useState } from "react";
import { UserForm } from "@/components/UserForm/UserForm.js";
import { ButtonModal } from "@/components/Button/ButtonModal.js";

export const ModalBlock = () => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const hundleOpenModal = () => {
    setIsOpenModal((prev) => !prev);
  };
  return (
    <div>
      <ButtonModal toggleOpen={() => setIsOpenModal(true)} />
      <UserForm isOpen={isOpenModal} closeModal={hundleOpenModal} />
    </div>
  );
};
