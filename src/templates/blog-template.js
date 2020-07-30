import React from "react"
import { graphql, Link } from "gatsby"
import Layout from "../components/Layout"
import ReactMarkdown from "react-markdown"

const ComponentName = () => {
  return <h2>blog post template</h2>
}

// query content info forEach specfic blog post, using unique slug
// set slug equal to slug variable from page context (gatsby-node.js)
export const query = graphql`
  query GetSingleBlog($slug: String) {
    blog: strapiBlogs(slug: { eq: $slug }) {
      content
    }
  }
`

export default ComponentName
