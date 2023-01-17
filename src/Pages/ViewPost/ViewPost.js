import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useViewPostQuery } from '../../Redux/Posts/Posts';
import { FaSmile, FaThumbsUp, FaEdit, FaShare } from "react-icons/fa";

const ViewPost = () => {
   const {id} = useParams()
   
   const response = useViewPostQuery(id)
  
   return (
     <div className=" my-5 text-white">
       <h3 className="text-center">Post Details</h3>
       <section className="border rounded w-50 mx-auto p-3 mb-5 shadow-lg">
         <div className="d-flex justify-content-center ">
           <div>
             <p>
               <span className="fw-bold fs-5"> Post ID:</span>{" "}
               {response?.data?.id}
             </p>
             <p>
               <span className="fw-bold fs-5"> Post User Id:</span>{" "}
               {response?.data?.userId}
             </p>
             <p>
               <span className="fw-bold fs-5">Title:</span>{" "}
               {response?.data?.title}
             </p>
             <p>
               <span className="fw-bold fs-5">Details:</span>{" "}
               {response?.data?.body}
             </p>
           </div>
         </div>
         <hr />
         <div>
           <p className="d-flex align-items-center gap-2">
             <FaSmile /> Suhana and 2 other
           </p>
         </div>
         <hr />
         <div className="d-flex justify-content-around">
           <p className="d-flex gap-2  align-items-center">
             <FaThumbsUp />
             Like
           </p>

           <p className="d-flex gap-2  align-items-center">
             <FaEdit />
             Comment
           </p>
           <p className="d-flex gap-2  align-items-center">
             <FaShare />
             Share
           </p>
         </div>
         <hr />
         <div class="form-floating">
           <textarea
             class="form-control"
             placeholder="Leave a comment here"
             id="floatingTextarea"
           ></textarea>
           <label className='text-black' for="floatingTextarea">Write a comment...</label>
         </div>
       </section>
       <div className="text-center">
         <Link
           to="/"
           className="text-decoration-none homeCard text-white px-3 py-1 rounded"
         >
           Go Back Home
         </Link>
       </div>
     </div>
   );
};

export default ViewPost;