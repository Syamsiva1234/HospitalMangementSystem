import React, { useEffect, useState } from "react";
import 'bootstrap/dist/css/bootstrap.css';
import 'bootstrap/dist/js/bootstrap.js';
import "./Navbar.css";
import Button from 'react-bootstrap/Button';
import { Link } from "react-router-dom";
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);


  const [pageName, setPageName] = useState(window.location.pathname.split("/")[1])
  const pathname = window.location.pathname.split("/")[1];
  // setPageName(pathname)
  // console.log(pathname)
  useEffect(() => {
    setPageName(window.location.pathname.split("/")[1])
  }, [pathname])

  return (

    <div className="Navbar">
      <span className="nav-logo d-md-none">Hospital Mangement System</span>
      <span className="nav-logo d-md-none">{pageName.length > 0 ? pageName : "Home Page"}</span>
      <div className={`nav-items ${isOpen && "open"}`}>
        <div className="al-left-home">
          <Button className="act sm-size-on-overlay" variant="outline-light size=sm"><Link to="/" className="xx"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="20" fill="currentColor" className="bi bi-chevron-left" viewBox="0 0 16 16">
            <path fillRule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z" />
          </svg> Home</Link></Button>
        </div>
        <Link to="/AboutUs"><Button className="act btn-size-adjust" variant="outline-light size=lg">AboutUs</Button></Link>
        <Link to="/OurScience"><Button className=" act btn-size-adjust" variant="outline-light size=lg">OurScience</Button></Link>
        <Link to="/OurPatients"><Button className="act btn-size-adjust" variant="outline-light size=lg">OurPatients</Button></Link>
        <Link to="/Events"><Button className="act btn-size-adjust" variant="outline-light size=lg">Events</Button></Link>
      </div>
      <div
        className={`nav-toggle ${isOpen && "open"}`}
        onClick={() => setIsOpen(!isOpen)}
      >
        <div className="bar"></div>
      </div>
    </div>

  )
}
export default Navbar;