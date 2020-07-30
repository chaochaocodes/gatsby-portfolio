import React, { useState } from "react"
import Title from "./Title"
import { FaAngleDoubleRight, FaAlignRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"

const query = graphql`
  {
    allStrapiJobs(sort: {fields: strapiId, order: DESC}) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  // data = entire query object
  const data = useStaticQuery(query)
  // destructure to get array of jobs
  const {allStrapiJobs: {nodes: jobs}} = data
  // useState to dynamically change and show job by id
  const [value, setValue] = useState(0);
  // destructure to show each element
  const {company, position, date, desc} = jobs[value];
  // console.log(company, position, date, desc)

  return (
    <section className="section jobs">
      <Title title="experience"/>
      <div className="jobs-center">

        {/* btn container */}
        <div className="btn-container">
          {jobs.map((item, index)=> {
            return (
            <button 
              key={item.strapiId} 
              onClick={()=> setValue(index)}
              className={`job-btn ${index === value && 'active-btn'}`}>
              {item.company}
            </button>
            )
          })}
        </div>

        {/* job info */}
        <article className="job-info">
          <h3>{position}</h3>
          <h4>{company}</h4>
        <p className="job-date">{date}</p>
        {desc.map((item) => {
          return (
            <div key={item.id} className="job-desc">
              <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
              <p>{item.name}</p>
            </div>
          )
        })}
        </article>
      </div>
      <Link to="/about" className="btn center-btn">
        more info
      </Link>
    </section>
  )
}

export default Jobs
