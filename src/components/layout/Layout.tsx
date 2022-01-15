import React, { useState, FC } from "react";
import { Header } from "../header/Header";
import { Main } from "../main/Main";
import { Footer } from "../footer/Footer";
import { Modal } from "../UI/Modal";

export const Layout: FC = () => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);

  const openModal = (): void => setIsOpen(true);
  const closeModal = (): void => setIsOpen(false);

  return (
    <>
      <Header openModal={openModal} />
      <Main />
      <Footer />
      <Modal closeModal={closeModal} modalIsOpen={modalIsOpen} />
    </>
  );
};
