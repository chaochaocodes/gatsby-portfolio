import React from "react"
import Layout from "../components/Layout"
import { graphql } from "gatsby"
import Title from "../components/Title"
import Image from "gatsby-image"

// 2. destructure 'about' from graphql query
const About = ({
    data: {
      about: { nodes },
    },
}) => {
  // console.log(nodes[0])
  const{title, stack, info, image} = nodes[0]

  return (
      <Layout>
        <section className="about-page">
          <div className="section-center about-center">
            <Image fluid={image.childImageSharp.fluid}
              className="about-img" />
              <article className="about-text">
                <Title title={title}/>
                <p>{info}</p>
                <div className="about-stack">
                  {stack.map((item)=>{
                    return <span key={item.id}>{item.name}</span>
                  })}
                </div>
              </article>
          </div>
        </section>
      </Layout>
    )
}

// 1. added alias 'about' to entire query
export const query = graphql`
  {
    about: allStrapiAbout {
      nodes {
        title
        info
        stack {
          id
          name
        }
        image {
          childImageSharp {
            fluid {
              src
            }
          }
        }
      }
    }
  }
`

export default About
