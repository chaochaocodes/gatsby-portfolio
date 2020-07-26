import React from "react"
// import "../css/main.css"
import Navbar from "./Navbar"
import Sidebar from "./Sidebar"
import Footer from "./Footer"

// Layout wraps all components, includes: Navbar, Sidebar, Footer
const Layout = ({ children }) => {
  return (
    <>
      <Navbar/>
      {children}
    </>
  )
}

export default Layout
