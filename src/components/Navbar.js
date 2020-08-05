import React from "react"
import { Link } from "gatsby"
// toggle 'hamburger icon' for responsive view
import { FaBars } from "react-icons/fa"
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
        <h3><strong>
          <Link to="/" style={styleTeal}>Alicia</Link>
          <Link to="/" style={styleGrey}>byDesign</Link></strong>
        </h3>
        <button type="button" 
          className="toggle-btn"
          onClick={toggleSidebar}>
          <FaBars/>
        </button>
      </div> 
      <PageLinks styleClass="nav-links"></PageLinks>
    </div>
  </nav>
  )
}

export default Navbar
