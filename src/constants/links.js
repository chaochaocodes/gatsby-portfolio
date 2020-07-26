import React from "react"
import { Link } from "gatsby"
const data = [
  {
    id: 1, // id for list key 
    text: "home", // display text in nav bar
    url: "/", // navigate to /home
  },
  {
    id: 2,
    text: "about",
    url: "/about/",
  },
  {
    id: 3,
    text: "projects",
    url: "/projects/",
  },
  {
    id: 4,
    text: "blog",
    url: "/blog/",
  },
  {
    id: 5,
    text: "contact",
    url: "/contact/",
  },
]

const tempLinks = data.map(link => {
  return (
    <li key={link.id}>
      <Link to={link.url}>{link.text}</Link>
    </li>
  )
})
// I KNOW WE CAN COMBINE IT !!!!!
// option to change styleClass props

export default ({ styleClass }) => {
  return (
    <ul className={`page-links ${styleClass ? styleClass : ""}`}>
      {tempLinks}
    </ul>
  )
}
