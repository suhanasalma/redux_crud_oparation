import React from 'react';
import { Link, useParams } from 'react-router-dom';
import { useViewPostQuery } from '../../Redux/Posts/Posts';

const ViewPost = () => {
   const {id} = useParams()
   console.log(id)
   const response = useViewPostQuery(id)
   console.log(response?.data)
   return (
     <div>
       <h3 className="text-center my-5">Post Details</h3>
       <div className="d-flex justify-content-center shadow p-3 mb-5 bg-body-tertiary rounded w-50 mx-auto">
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
       <div className="text-center">
         <Link
           to="/"
           className="text-decoration-none bg-danger text-white px-3 py-1 rounded"
         >
           Go Back Home
         </Link>
       </div>
     </div>
   );
};

export default ViewPost;