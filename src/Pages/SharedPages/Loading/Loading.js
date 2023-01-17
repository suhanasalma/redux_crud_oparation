import React from 'react';
import Spinner from "react-bootstrap/Spinner";

const Loading = () => {
   return (

       <Spinner
         className="text-center text-white bg-white flex justify-content-center align-item-center"
          animation="border"
         role="status"
       >
         <span className="visually-hidden">Loading...</span>
       </Spinner>

   );
};

export default Loading;