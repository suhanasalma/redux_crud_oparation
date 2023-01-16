import React from 'react';
import Card from "react-bootstrap/Card";
import { useGetAllPostQuery } from '../../Redux/Posts/Posts';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import HomeCard from '../../Components/Card/HomeCard';


const Home = () => {
   const responseData = useGetAllPostQuery();
   const {data,isError,isFetching,isLoading,isSuccess} = responseData;
   
   if(isLoading) return <div className='text-center'>Loading...</div>
   if(isError) return <div>Error Occured</div>

   
   
   return (
     <div className="container">
       <h3 className="text-center my-5">Redux Tollkit RTK Crud Oparation</h3>
       <div className="text-center mb-5">
         <Link to="/addpost">
           <Button variant="danger">Add Post</Button>
         </Link>
       </div>
       <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 ">
         {data?.map((info) => (
           <HomeCard key={info.id} info={info}/>
         ))}
       </div>
     </div>
   );
};

export default Home;