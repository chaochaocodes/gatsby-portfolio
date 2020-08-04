import React from "react"
// logo in header
import logo from "../assets/logo.svg"
// toggle 'hamburger icon' for responsive view
import { Link } from "gatsby"
import { FaAlignRight } from "react-icons/fa"
// links each page, web view
import PageLinks from "../constants/links"

const styleTeal = {
  color: "#2caeba",
}
const styleGrey = {
  color: "#173C5E",
}

const Navbar = ({toggleSidebar}) => {
  return (
  <nav className="navbar">
    <div className="nav-center">
      <div className="nav-header">
        <h3>
          <Link to="/" style={styleTeal}> Alicia </Link>
          <Link to="/" style={styleGrey}> byDesign </Link>
        </h3>
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
