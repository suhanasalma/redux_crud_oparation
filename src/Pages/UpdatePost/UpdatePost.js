import React from 'react';
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { useUpdatePostMutation } from '../../Redux/Posts/Posts';
import { toast } from 'react-toastify';

const UpdatePost = (props) => {
  const [updateInfo, response] = useUpdatePostMutation();
  // console.log(response);

  const handleEdit = async (e) => {
    e.preventDefault();
    const id = e.target.id.value;
    const title = e.target.title.value;
    const body = e.target.details.value;
    const formValue = {
      title,
      body,
      id,
    };

    await updateInfo(formValue);
    toast("Updated Succesfully");
  };
  return (
    <div>
      <Modal
        {...props}
        size="md"
        aria-labelledby="contained-modal-title-vcenter"
        centered
      >
        <Modal.Header closeButton>
          <Modal.Title id="contained-modal-title-vcenter">
            Update Details
          </Modal.Title>
        </Modal.Header>
        <div className=" p-3">
          <Form onSubmit={handleEdit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>ID</Form.Label>

              <Form.Control
                name="id"
                type="number"
                
                 defaultValue={`${props?.info?.id}`}
           
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Title</Form.Label>

              <Form.Control
                name="title"
                type="text"
                placeholder={`${props.info.title}`}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Details</Form.Label>
              <textarea
                name="details"
                class="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
              ></textarea>
            </Form.Group>

            <Button onClick={props.onHide} variant="primary" type="submit" className='homeCard border-0 fw-bold w-100'>
              Submit
            </Button>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default UpdatePost;