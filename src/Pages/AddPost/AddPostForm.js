import React from 'react';
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
const AddPostForm = ( {handleAddPost }) => {
  return (
    <Form onSubmit={handleAddPost}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>ID</Form.Label>

        <Form.Control name="id" type="number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User ID</Form.Label>

        <Form.Control name="userid" type="number" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Title</Form.Label>

        <Form.Control name="title" type="text" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Details</Form.Label>
        <textarea
          name="details"
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="4"
        ></textarea>
      </Form.Group>

      <Button className='homeCard fw-bold border-0 w-100' variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default AddPostForm;