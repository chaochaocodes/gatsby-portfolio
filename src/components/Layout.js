import React, { useState } from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

// Layout wraps all components
// Toggle sidebar function passed to navbar and sidebar
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  // Sidebar is position fixed, can render in any order
  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      {/* sidebar needs to know it's own state! */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer/>
    </>
  )
}  

export default Layout
