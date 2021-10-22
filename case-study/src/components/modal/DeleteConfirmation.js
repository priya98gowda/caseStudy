import React from 'react'
import { Modal, Button } from "react-bootstrap";
 
const DeleteConfirmation = (props) => {
  const deleteIndex=props.delIndex;
  const confirmDeletion = (index) => {
    props.getDeleteDataIndex(index) 
    hideModal()
    };
  
  const hideModal = () =>{ props.setisShowDelete(false)}
  const showModal = () =>{ props.setisShowDelete(true)} 
    return (


      <Modal show={showModal} onHide={hideModal}>
      <Modal.Header closeButton>
        
      </Modal.Header>
      <Modal.Body><div className="alert display-6">Do you really want to Delete ?</div></Modal.Body>
      <Modal.Footer>
        <Button variant="dark" onClick={hideModal}>
          Cancel
        </Button>
        <Button variant="danger" onClick={()=>{confirmDeletion(deleteIndex)}} > 
          Delete
        </Button>
      </Modal.Footer>
    </Modal>


      //   <Modal show={showModal} onHide={hideModal}>
      //   <Modal.Header closeButton>
      //     <Modal.Title>Delete Confirmation</Modal.Title>
      //   </Modal.Header>
      //   <Modal.Body><div className="alert alert-danger">{message}</div></Modal.Body>
      //   <Modal.Footer>
      //     <Button variant="default" onClick={hideModal}>
      //       Cancel
      //     </Button>
      //     <Button variant="danger" onClick={() => confirmModal(type, id) }>
      //       Delete
      //     </Button>
      //   </Modal.Footer>
      // </Modal>
    )
}
 
export default DeleteConfirmation;