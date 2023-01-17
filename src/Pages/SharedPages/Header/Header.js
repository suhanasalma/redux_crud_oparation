import React from 'react';
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Offcanvas from "react-bootstrap/Offcanvas";
import { Link } from 'react-router-dom';

const Header = () => {
  const menus = [
    {
      label:'Add Post',
      link:'/addpost'
    },
    {
      label:"All Post",
      link:'/allpost'
    },
  ]
   return (
     <div className="">
       {["md"].map((expand) => (
         <Navbar key={expand} expand={expand} className="">
           <Container fluid>
             <Link className="text-decoration-none" to="/">
               <Navbar.Brand className="text-uppercase text-white fs-1 fw-bold">
                 Crud
               </Navbar.Brand>
             </Link>
             <Navbar.Toggle
               className="bg-white"
               aria-controls={`offcanvasNavbar-expand-${expand}`}
             />
             <Navbar.Offcanvas
               className=""
               id={`offcanvasNavbar-expand-${expand}`}
               aria-labelledby={`offcanvasNavbarLabel-expand-${expand}`}
               placement="end"
             >
               <Offcanvas.Header
               closeButton
               >
                 <Offcanvas.Title
                   className="text-uppercase fs-1 text-white fw-bold"
                   id={`offcanvasNavbarLabel-expand-${expand}`}
                 >
                   Crud
                 </Offcanvas.Title>
               </Offcanvas.Header>
               <Offcanvas.Body>
                 <Nav className="justify-content-end flex-grow-1 pe-3 ">
                   {menus.map((menu) => (
                     <Link
                       className="text-white me-5 text-decoration-none fw-bold"
                       to={menu.link}
                     >
                       {menu.label}
                     </Link>
                   ))}
                 </Nav>
               </Offcanvas.Body>
             </Navbar.Offcanvas>
           </Container>
         </Navbar>
       ))}
     </div>
   );
};

export default Header;