import React from "react"
// all imports needed for image
import Image from "gatsby-image"
import { Link } from "gatsby"
import { graphql, useStaticQuery } from "gatsby"
import SocialLinks from "../constants/socialLinks"

// GraphQL playground: http://localhost:8000/__graphql?query=
// type query, code export StaticQuery hook
const query = graphql`
{
  file(relativePath: {eq: "hero-img.png"}) {
    childImageSharp {
      fluid {
        ...GatsbyImageSharpFluid
      }
    }
  }
}
`

const Hero = () => {
  // const data = useStaticQuery(query);
  // console.log(data) check data! 

  const {
    file: {
      childImageSharp: {
        fluid }, // passed into the image's fluid property {fluid}.  Image only shows on web view
      },
    } = useStaticQuery(query);

  return (
    <header className="hero">
      <div className="section-center hero-center">
        <article className="hero-info">
          <div>
            <div className="underline"></div>
            <h1>I'm Alicia</h1>
            <h4>freelance full stack web dev and design</h4>
            <Link to='/contact' className="btn">
              Contact me
            </Link>
          </div>
        </article>
        <Image fluid={fluid} className="hero-img" /> 
      </div>
    </header>
  ) 
}

export default Hero
