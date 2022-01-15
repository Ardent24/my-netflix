import React, { FC, useState, FormEvent } from "react";
import {
  Footer,
  Header,
  Main,
  ModalBody,
  Title,
} from "../views/core/Modal.styled";
import { ClassNames } from "@emotion/react";
import ModalLibrary from "react-modal";
import { Btn } from "./Btn";
import { Fieldset } from "./Fieldset";
import { useDispatch } from "react-redux";
import { addMovie } from "../../api/api";

interface IProps {
  modalIsOpen: boolean;
  closeModal: () => void;
}

export const Modal: FC<IProps> = ({ modalIsOpen, closeModal }) => {
  const dispatch = useDispatch();
  const [inpTitle, setInpTitle] = useState<string>("");
  const [inpDate, setInpDate] = useState<string>("");
  const [inpUrl, setInpUrl] = useState<string>("");
  const [inpRuntime, setInpRuntime] = useState<string | number>(0);
  const [inpOverview, setInpOverview] = useState<string>("");

  const handlerTitle = (value: string) => setInpTitle(value);
  const handlerDate = (value: string) => setInpDate(value);
  const handlerUrl = (value: string) => setInpUrl(value);
  const handlerRuntime = (value: string) => setInpRuntime(value);
  const handlerOverview = (value: string) => setInpOverview(value);

  const handlerEmptyForm = (): void => {
    setInpTitle("");
    setInpDate("");
    setInpUrl("");
    setInpRuntime("");
    setInpOverview("");
  };

  const handleSubmit = (ev: FormEvent) => {
    const movie = {
      title: inpTitle,
      runtime: +inpRuntime,
      overview: inpOverview,
      poster_path:
        "https://image.tmdb.org/t/p/w500/ylXCdC106IKiarftHkcacasaAcb.jpg",
      genres: ["Comedy", "Drama", "Romance"],
    };
    ev.preventDefault();

    dispatch(addMovie(movie));
    handlerEmptyForm();
    closeModal();
  };
  const resetForm = (ev: FormEvent) => {
    ev.preventDefault();
    handlerEmptyForm();
  };
  return (
    <ClassNames>
      {({ css }) => (
        <ModalLibrary
          ariaHideApp={false}
          isOpen={modalIsOpen}
          onRequestClose={closeModal}
          overlayClassName="modal-overlay"
          className="modal-content"
          portalClassName={css`
            .modal-overlay {
              padding: 1rem;
              position: fixed;
              top: 0;
              bottom: 0;
              right: 0;
              left: 0;
              background-color: rgba(0, 0, 0, 0.6);
              display: flex;
              justify-content: center;
              align-items: center;
            }

            .modal-content {
              max-width: 600px;
              width: 100%;
              background-color: #232323;
              border-radius: 6px;
            }
          `}
        >
          <ModalBody onSubmit={handleSubmit}>
            <Header>
              <button onClick={closeModal}>&#215;</button>
            </Header>
            <Title>Add movie</Title>
            <Main>
              <Fieldset
                title="title"
                handlerItem={handlerTitle}
                inpValue={inpTitle}
              />
              <Fieldset
                title="release date"
                inputType="date"
                handlerItem={handlerDate}
                inpValue={inpDate}
              />
              <Fieldset
                title="Movie url"
                handlerItem={handlerUrl}
                inpValue={inpUrl}
              />
              <Fieldset
                title="runtime"
                inputType="number"
                handlerItem={handlerRuntime}
                inpValue={inpRuntime}
              />
              <Fieldset
                title="overview"
                handlerItem={handlerOverview}
                inpValue={inpOverview}
              />
            </Main>
            <Footer>
              <Btn
                padding="1rem 2rem"
                variant="black"
                type="button"
                btnFunc={resetForm}
              >
                RESET
              </Btn>
              <Btn padding="1rem 2rem" variant="pink" type="submit">
                submit
              </Btn>
            </Footer>
          </ModalBody>
        </ModalLibrary>
      )}
    </ClassNames>
  );
};
