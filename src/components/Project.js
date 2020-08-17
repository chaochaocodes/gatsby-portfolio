import React from "react"
import PropTypes from "prop-types"
import Image from "gatsby-image"
import { FaGithub, FaYoutube, FaLink } from "react-icons/fa"
const Project = ({description, title, github, stack, url, demo, image, index}) => {

  return (
    <article className="project">
      <Image fluid={image.childImageSharp.fluid} className="project-img"/>
    <div className="project-info">
      <span className="project-number"> 0 {index+1}</span>
      <h3>{title}</h3>
      <p className="project-desc">
        {description}
      </p>
      <div className="project-stack">
        {stack.map((item)=> {
          return <span key={item.id}>{item.name}</span> 
        })}
      </div>
      <div className="project-links">
        <a href={github} target="_blank" rel="noreferrer">
          <FaGithub className="project-icon"/>
        </a>
        { demo ? 
          <a href={demo} target="_blank" rel="noreferrer">
            <FaYoutube className="project-icon"/>
          </a> 
          : ""
        }
        { url ? 
          <a href={url} target="_blank" rel="noreferrer">
            <FaLink className="project-icon"/>
          </a>
          : ""
        }
      </div>
    </div>
    </article>
  )
}

// Use: gives warnings in console if any props missing vs. vague error
// import PropTypes, call .propTypes method, to define required properties
Project.propTypes = {
  title:PropTypes.string.isRequired,
  github:PropTypes.string.isRequired,
  // url:PropTypes.string.isRequired,
  // demo:PropTypes.string.isRequired,
  description:PropTypes.string.isRequired,
  image:PropTypes.object.isRequired,
  stack:PropTypes.arrayOf(PropTypes.object).isRequired,
}

export default Project
