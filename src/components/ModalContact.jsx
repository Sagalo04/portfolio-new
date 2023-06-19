import { Input, Modal, Textarea, styled } from "@nextui-org/react";
import React from "react";
import emailjs from "emailjs-com";
import swal from "sweetalert";
import Button from "./Button";
import theme from "../styles/theme";

const StyledModal = styled(Modal, {
  "&.nextui-modal-wrapper-enter": {
    paddingTop: 0,
    background: "white",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    ".nextui-modal-close-icon-svg": {
      color: "white",
    },
    form: {
      width: "100%",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      justifyContent: "center",
      backgroundColor: "white",
      paddingInline: "1rem",
      gap: "1rem",
      marginBottom: "1rem",
      marginTop: "1rem",
    },
    ".meImg": {
      width: "45%",
      marginTop: "-6rem",
    },
  },
});

const StyledInput = styled(Input, {
  [`.${theme} &`]: {
    borderRadius: "8px",
    border: "solid 1px $primary_300",

    ".nextui-input": {
      color: "black",
    },
    ".nextui-input-wrapper": {
      borderRadius: "6px",
      backgroundColor: "#f1f3f5",
    },
    ".nextui-input-helper-text": {
      fontSize: "12px",
      color: "yellow",
    },
  },
  "& + .nextui-input-helper-text-container .nextui-input-helper-text": {
    fontSize: "12px",
  },
});

const StyledTextArea = styled(Textarea, {
  [`.${theme} &`]: {
    borderRadius: "8px",
    border: "solid 1px $primary_300",
    ".nextui-input-wrapper": {
      color: "black",
      borderRadius: "6px",
      backgroundColor: "#f1f3f5",
    },
    ".nextui-input-textarea": {
      color: "black",
    },
    ".nextui-input-helper-text": {
      fontSize: "12px",
      color: "yellow",
    },
  },
  "& + .nextui-input-helper-text-container .nextui-input-helper-text": {
    fontSize: "12px",
  },
});

function ModalContact({ visible, closeHandler }) {
  function sendEmail(e) {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_cdaq7is",
        "template_qli27me",
        e.target,
        "user_0L14uxwE2jPakyN5UFPci"
      )
      .then(
        (result) => {
          swal(
            "Mensaje Enviado",
            "Pronto me pondré en contacto contigo",
            "success"
          ).then(() => {
            // window.location.reload();
            closeHandler();
          });
        },
        (error) => {
          swal(
            "Opps",
            "Un error inesperado ha ocurrido, intentalo de  nuevo mas tard",
            "error"
          ).then(() => {
            // window.location.reload();
            closeHandler();
          });
        }
      );
  }

  return (
    <StyledModal
      closeButton
      blur
      aria-labelledby="modal-title"
      open={visible}
      onClose={closeHandler}
    >
      <img src="/assets/images/banners/image 3.png" alt="" />
      <img className="meImg" src="/assets/images/banners/s 5.png" alt="" />
      <form onSubmit={sendEmail}>
        <StyledInput
          fullWidth
          label="Name / Company"
          placeholder="Ex: Jhon Doe / Big Company"
          name="from_name"
        />
        <StyledInput
          fullWidth
          label="Email"
          placeholder="Ex: your_email@mail.com"
          name="from_email"
        />
        <StyledTextArea
          minRows={5}
          fullWidth
          label="Message"
          name="html_message"
        />
        <Button type="submit">Submit</Button>
      </form>
    </StyledModal>
  );
}

export default ModalContact;
