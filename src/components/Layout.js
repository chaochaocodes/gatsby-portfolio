import React, { useState } from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
// Sidebar is position fixed, can render in any order
import Sidebar from "./Sidebar"
import Footer from "./Footer"

// Layout wraps all components, and includes: Navbar, Sidebar, Footer
// Toggle sidebar function passed to navbar and sidebar
const Layout = ({ children }) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSidebar = () => {
    setIsOpen(!isOpen)
  }

  return (
    <>
      <Navbar toggleSidebar={toggleSidebar} />
      {/* sidebar needs to know it's state! */}
      <Sidebar isOpen={isOpen} toggleSidebar={toggleSidebar} />
      {children}
      <Footer/>
    </>
  )
}  

export default Layout
