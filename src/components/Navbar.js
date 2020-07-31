import React from "react"
// logo in header
import logo from "../assets/logo.svg"
// toggle 'hamburger icon' for responsive view
import { FaAlignRight } from "react-icons/fa"
// links each page, web view
import PageLinks from "../constants/links"

const Navbar = ({toggleSidebar}) => {
  return (
  <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <img src={logo} alt="logo"/>
        <button type="button" 
          className="toggle-btn"
          onClick={toggleSidebar}>
          <FaAlignRight></FaAlignRight>
        </button>
      </div> 
      <PageLinks styleClass="nav-links"></PageLinks>
    </div>
  </nav>
  )
}

export default Navbar
