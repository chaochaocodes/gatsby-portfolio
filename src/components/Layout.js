import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
// Sidebar is position fixed, can render in any order
import Sidebar from "./Sidebar"
import Footer from "./Footer"

// Layout wraps all components, includes: Navbar, Sidebar, Footer
const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      <Sidebar/>
      {children}
      <Footer/>
    </>
  )
}

export default Layout
