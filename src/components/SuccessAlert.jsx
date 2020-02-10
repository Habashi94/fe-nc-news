import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

function SuccessAlert() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="success" onClose={() => setShow(false)} dismissible>
        Comment Successfully Deleted!!
      </Alert>
    );
  }
  return null;
}
export default SuccessAlert;
