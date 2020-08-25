import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";
import "../../styles/css/misc/errorAlert.css";

function ErrorAlert({ message, hide }) {
  const [show, setShow] = useState(true);

  setTimeout(() => hide(), 5000);

  if (show) {
    return (
      <Alert
        className="absolute"
        variant="danger"
        onClose={() => hide()}
        dismissible
      >
        {message}
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default ErrorAlert;
