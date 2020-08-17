import React from 'react';
import Title from './Title';

const Skills = () => {

  let frontEnd = ["JavaScript, ES6+", "HTML", "CSS", "React", "React-Redux", "Node.js", "Express.js", "Gatsby.js"]
  let backEnd = ["Ruby on Rails", "SQL", "PostgreSQL", "MongoDB"]
  let tools =["Strapi (CMS)", "Version Control (Git/Github)", "RESTful APIs", "MVC architecture", "Wireframing  & Mockups", "Adobe XD", "Bootstrap", "Material UI"]

  return (
    <section className="section skills" id="skills">
      <Title title="skills"/>
      <div className="skills-center">
        <article className="skills-info">
          <div className="skills-column">
            <h3>Front End</h3>
            {frontEnd.map(skill => {return <p>{skill}</p>})}
          {/* </div>
          <div className="skills-column"> */}
            <h3>Back End</h3>
            {backEnd.map(skill => {return <p>{skill}</p>})}
          {/* </div>
          <div className="skills-column"> */}
            <h3>Tools</h3>
            {tools.map(skill => {return <p>{skill}</p>})}
          </div>
        </article>
      </div>
    </section>
  )
}

export default Skills