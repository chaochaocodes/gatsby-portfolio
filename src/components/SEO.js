import React, { useState } from "react"
import { Helmet } from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

// query metadata in gatsby-config
const query = graphql`
  {
    site {
      siteMetadata {
        author
        siteDesc: description
        image
        siteUrl
        siteTitle: title
        twitterUsername
      }
    }
  }
`

// 2 two  ways to pass in meta tags => helmet or meta
const SEO = ({title, description}) => {
  const { site } = useStaticQuery(query);
  const { 
    siteDesc,
    siteTitle,
    siteUrl,
    image,
    twitterUsername
  } = site.siteMetadata
  
  return (
    <Helmet htmlAttributes={{ lang:"en" }} title={`${title} | ${siteTitle}`}>
      <meta name="description" content={ description || siteDesc } />
      <meta name="image" content={image} />
      {/* twitter cards  */}
    </Helmet>
  )
}


export default SEO
