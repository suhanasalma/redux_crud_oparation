import React from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";
import './Footer.css'

const Footer = () => {
  const menus = [
    {
      label:"Product",
      submenu:["Features","Intefrations","FAQ"]
    },
    {
      label:"Company",
      submenu:["Privacy","Terms of Services"]
    },
    {
      label:"Developers",
      submenu:["Public Api","Documentation","Guides"]
    },
  ]
   return (
     <footer className="bg-white p-5 rounded">
       <div className="d-flex flex-sm-column flex-lg-row gap-5">
         <div className="">
           <Link to="/" className="text-decoration-none">
             <span className="text-uppercase fs-3 fw-bold footerLabel">
               Crud
             </span>
           </Link>
         </div>
         <div className="d-flex justify-content-between flex-grow-1 flex-wrap">
           {menus?.map((menu) => (
             <div className="">
               <h3 className="">{menu.label}</h3>
               <ul className="">
                 {menu?.submenu?.map((item) => (
                   <li className="footerLink">
                     <Link className="text-decoration-none text-secondary">
                       {item}
                     </Link>
                   </li>
                 ))}
               </ul>
             </div>
           ))}

           <div className="">
             <h3 className="">Social media</h3>
             <div className="">
               <Link
                 rel="noopener noreferrer"
                 href="#"
                 title="Facebook"
                 className="flex items-center p-1"
               >
                 <FaFacebook className="fs-3" />
               </Link>
               <Link
                 rel="noopener noreferrer"
                 href="#"
                 title="Twitter"
                 className="flex items-center p-1"
               >
                 <FaTwitter className="fs-3" />
               </Link>
               <Link
                 rel="noopener noreferrer"
                 href="#"
                 title="Instagram"
                 className="flex items-center p-1"
               >
                 <FaInstagram className="fs-3" />
               </Link>
             </div>
           </div>
         </div>
       </div>
       <hr />
       <div className="text-center reserve">
         © 2022 Company Co. All rights reserved.
       </div>
     </footer>
   );
};

export default Footer;