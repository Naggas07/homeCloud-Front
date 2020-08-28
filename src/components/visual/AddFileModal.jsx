import React, { useState } from "react";
import { Modal, Form, Button } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUpload } from "@fortawesome/free-solid-svg-icons";
import filesFoldersService from "../../services/pathFilesServices";

const AddFileModal = (props) => {
  const [show, setShow] = useState(false);

  const [items, setItems] = useState(0);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  let dataForm = new FormData();

  const handleChange = (event) => {
    const { files } = event.target;

    for (let i = 0; i < files.length; i++) {
      dataForm.append("file", files[i]);
    }
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log("Entra");

    filesFoldersService
      .uploadFiles(props.path, dataForm)
      .then((ok) => {
        console.log("entra al ok");
        setItems(0);
        handleClose();
        props.reload();
      })
      .catch((err) => {
        setItems(0);
        return console.log(err);
      });
  };

  return (
    <>
      <FontAwesomeIcon
        icon={faUpload}
        className="add-icon"
        onClick={handleShow}
      />
      <Modal
        show={show}
        onHide={handleClose}
        size="lg"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header className="primaryBackground" closeButton>
          <Modal.Title>Añadir Archivo</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group>
              <Form.File
                name="upload-files"
                id="custom-file"
                label={
                  items ? `${items} archivos agregados` : "Introduce archivos"
                }
                data-browse="subir Archivos"
                multiple
                onChange={handleChange}
                custom
              />
            </Form.Group>
            <div className="right-flex">
              <Button className="primaryBackground submit-button" type="submit">
                <FontAwesomeIcon icon={faUpload} /> Subir archivos
              </Button>
            </div>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
};

export default AddFileModal;
