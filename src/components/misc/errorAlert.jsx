import React, { useState } from "react";
import { Alert, Button } from "react-bootstrap";

function ErrorAlert({ message, hide }) {
  const [show, setShow] = useState(true);

  setTimeout(() => hide(), 5000);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => hide()} dismissible>
        {message}
      </Alert>
    );
  }
  return <Button onClick={() => setShow(true)}>Show Alert</Button>;
}

export default ErrorAlert;
