import React from 'react';
import Title from './Title';

const Skills = () => {

  let frontEnd = ["JavaScript, ES6+","React", "React-Redux",  "HTML", "CSS", "Node.js", "GraphQL"]
  let backEnd = ["Ruby", "Ruby on Rails", "SQL", "PostgreSQL", "MongoDB"]
  let tools =["Git / GitHub", "RESTful APIs", "MVC architecture", "Adobe XD", "Material UI", "Strapi (CMS)"]

  return (
    <section className="section skills" id="skills">
      <Title title="skills"/>
      <div className="skills-center">
        <article className="skills-info">
            <div className="skills-column">
              <h3>Front End</h3>
              {frontEnd.map(skill => {return <p>{skill}</p>})}
            </div>
            <div className="skills-column">
              <h3>Back End</h3>
              {backEnd.map(skill => {return <p>{skill}</p>})}
            </div>
            <div className="skills-column">
              <h3>Tools</h3>
              {tools.map(skill => {return <p>{skill}</p>})}
            </div>
        </article>
      </div>
    </section>
  )
}

export default Skills