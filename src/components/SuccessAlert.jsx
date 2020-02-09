import React, { useState } from "react";
import Alert from "react-bootstrap/Alert";

function SuccessAlert() {
  const [show, setShow] = useState(true);

  if (show) {
    return (
      <Alert variant="danger" onClose={() => setShow(false)} dismissible>
        Comment Succesfully Deleted!!
      </Alert>
    );
  }
  return null;
}
export default SuccessAlert;
