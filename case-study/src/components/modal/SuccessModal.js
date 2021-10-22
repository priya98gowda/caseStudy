/* import { useState } from "react";
import { Modal,Button, } from "react-bootstrap";
import './SuccessModal.css'

function SuccessModal() {
  const [smShow, setSmShow] = useState(false);


  return (
    <>
      <Button onClick={() => setSmShow(true)}>Button</Button>{' '}
     
      <Modal
        size="sm"
        show={smShow}
        onHide={() => setSmShow(false)}
        aria-labelledby="example-modal-sizes-title-sm"
      >
       
          <Modal.Title id="example-modal-sizes-title-sm">
            
          </Modal.Title>
      
        <Modal.Body >
        
          <i class="far fa-check-circle" id="icon"></i>
          
          <h6 className="button"> Successfully Uploaded</h6>
          <button className="button1">Ok</button>
        </Modal.Body>
      </Modal>
      
      </>
  );
}

export default SuccessModal
 */

import "./SuccessModal.css";
import React from "react";
import { Modal, Button } from "react-bootstrap";

function SuccessModal(props) {
  const handleClose = () => {
    props.gethandleClose(true);
  };
  return (
    <div>
      <>
        <Modal show={props.showSuccessMessage} onHide={handleClose}>
          <Modal.Body>
            <h6 className="classy"> Successfully Uploaded</h6>
            <div className="classy">
              <i class="far fa-check-circle" id="icon"></i>
            </div>
            <div className="classy">
              <Button style={{ background: "#FAA81D" }} onClick={handleClose}>
                OK
              </Button>
            </div>
          </Modal.Body>
        </Modal>
      </>
    </div>
  );
}

export default SuccessModal;
