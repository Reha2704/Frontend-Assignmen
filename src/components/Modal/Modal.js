import React, { useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
function Modaal(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
    console.log(props.data.inputs)
  return (
    <>
      <Button variant="info" onClick={handleShow}>
        Submit
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title >Output Json Schema</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        {
       Object.keys(props.data.inputs).map((key,i)=>{
         return(
          <p key={i}>
             <span> {key}: {props.data.inputs[key]}</span>
          </p>
         )
       })
      }
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default  Modaal;