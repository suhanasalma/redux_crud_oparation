import React, { useState } from 'react';
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { useAddPostMutation } from '../../Redux/Posts/Posts';
import AddPostForm from './AddPostForm';

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
        toast("Added Succesfully")
   }
   return (
     <div>
       <h2 className="text-center my-3 text-white fw-bold">Add Post</h2>
       <div className="w-75 mx-auto shadow p-3 mb-5 bg-body-tertiary rounded text-white">
         <AddPostForm handleAddPost={handleAddPost} />
       </div>
     </div>
   );
};

export default AddPost;