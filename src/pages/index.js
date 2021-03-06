import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/Layout"
import Hero from "../components/Hero"
// import Services from "../components/Services"
import Jobs from "../components/Jobs"
import Projects from "../components/Projects"
// import Blogs from "../components/Blogs"
import Skills from "../components/Skills"
import SEO from "../components/SEO"

export default ({data}) => {
  // console.log(data);
  const {
    allStrapiProjects: {nodes: projects},
    // allStrapiBlogs: {nodes: blogs}
  } = data

  return (
  <Layout>
    <SEO title="Home" description="this is the home page"/>
    <Hero/>
    {/* <Services/> */}
    <Projects projects={projects} title="featured projects" showLink />
    {/* <Blogs blogs={blogs} title="blog posts" showLink /> */}
    <Jobs/>
    <Skills/>
  </Layout>
  )
}

export const query = graphql`
  {
    allStrapiProjects(filter: {featured: {eq: true}}) {
      nodes {
        github
        id
        description
        title
        url
        demo
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
        stack {
          id
          name
        }
      }
    }
    allStrapiBlogs(sort: {fields: date, order: DESC}, limit: 3) {
      nodes {
        slug
        desc
        date(formatString: "MMMM Do, YYYY")
        id
        title
        category
        image {
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`
