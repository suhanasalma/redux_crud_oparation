import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
import { useAddPostMutation } from '../../Redux/Posts/Posts';

const initialState = {
  id: "",
  title: "",
  body: "",
  userId: "",
};

const AddPost = () => {
  const [formValue,setFormValue] = useState(initialState)
  const [addPost] = useAddPostMutation()


   const handleAddPost = async (e)=>{
      e.preventDefault();
      console.log('clicked')
       const id = e.target.id.value;
       const userId = e.target.userid.value;
       const title = e.target.title.value;
       const body = e.target.details.value;
       console.log(title, body, id, userId);
       setFormValue({ ...formValue, title, body, id, userId });
       await addPost(formValue)
        console.log(formValue);
   }
   return (
     <div>
       <h2 className="text-center my-5">Add Post</h2>
       <div className="w-50 mx-auto shadow p-3 mb-5 bg-body-tertiary rounded">
         <Form onSubmit={handleAddPost}>
           <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>ID</Form.Label>

             <Form.Control
               name="id"
               type="number"
              //  readOnly
              //  value={`${1}`}
               // placeholder={`${props.info.title}`}
             />
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>User ID</Form.Label>

             <Form.Control
               name="userid"
               type="number"
              //  readOnly
              //  value={`${1}`}
               // placeholder={`${props.info.title}`}
             />
           </Form.Group>
           <Form.Group className="mb-3" controlId="formBasicEmail">
             <Form.Label>Title</Form.Label>

             <Form.Control
               name="title"
               type="text"
               // placeholder={`${props.info.title}`}
             />
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

           
             <Button variant="primary" type="submit">
               Submit
             </Button>
     
         </Form>
       </div>
     </div>
   );
};

export default AddPost;