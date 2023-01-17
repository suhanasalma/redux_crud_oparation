import React from 'react';
import Card from "react-bootstrap/Card";
import { useGetAllPostQuery } from '../../Redux/Posts/Posts';
import { Link } from 'react-router-dom';
import Button from "react-bootstrap/Button";
import HomeCard from '../../Components/Card/HomeCard';
import './home.css'
import create from '../../Assets/settings.png'
import read from '../../Assets/book.png'
import update from '../../Assets/update.jpg'
import remove from '../../Assets/delete.png'
import arrow from '../../Assets/arrow.png'
import Loading from '../SharedPages/Loading/Loading';
import ErrorPage from '../ErrorPage/ErrorPage';


const Home = () => {

  const cruds = [
    {
      label:"Create",
      img:create
    },
    {
      label:"Read",
      img:read
    },
    {
      label:"Update",
      img:update
    },
    {
      label:"Delete",
      img:remove
    },
  ]
   const responseData = useGetAllPostQuery();
   const {data,isError,isFetching,isLoading,isSuccess} = responseData;
   
   if(isLoading) return <Loading/>
   if(isError) return<ErrorPage/>

   
   
   return (
     <>
       <div className="hero">
         {cruds.map((crud) => (
           <div className="d-flex justify-content-between ailgn-items-center gap-2 w-75 mx-auto mb-5 p-2">
             <img className="img" src={crud.img} alt="" />
             <img className="img text-white" src={arrow} alt="" />
             <h2 className="text-white">{crud.label}</h2>
           </div>
         ))}
       </div>
       <div className="">
         <h3 className="text-center my-5 text-white">Redux Tollkit RTK Crud Oparation</h3>
         <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 ">
           {data?.map((info) => (
             <HomeCard key={info.id} info={info} />
           ))}
         </div>
         <div className='text-center my-3'>
           <button className='px-3 py-1 fs-5 homeCard text-white rounded'>See More</button>
         </div>
       </div>
     </>
   );
};

export default Home;