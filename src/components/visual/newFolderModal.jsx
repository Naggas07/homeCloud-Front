import React, { useState } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFolderPlus } from "@fortawesome/free-solid-svg-icons/faFolderPlus";
import "../../styles/css/visual/newFolder.css";
import filesFoldersService from "../../services/pathFilesServices";

function NewFolderModal(props) {
  const [show, setShow] = useState(false);
  const [name, setName] = useState("");

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  console.log(props.path);

  const handleChange = (event) => {
    const { value } = event.target;

    setName(value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    let items = {
      name,
    };
    filesFoldersService.newFolder(props.path, items).then((ok) => {
      handleClose();
      setName("");
      props.reload();
    });
  };

  return (
    <>
      <FontAwesomeIcon
        className="add-icon"
        icon={faFolderPlus}
        onClick={handleShow}
      />

      <Modal
        show={show}
        onHide={handleClose}
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="primaryBackground" closeButton>
          <Modal.Title>Añadir carpeta</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group controlId="formGridEmail">
              <Form.Label>Nombre de la nueva carpeta</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre"
                value={name}
                onChange={handleChange}
                autoComplete="off"
              />
            </Form.Group>
            <div className="right-flex">
              <Button className="primaryBackground" type="submit">
                Crear carpeta
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export default NewFolderModal;
