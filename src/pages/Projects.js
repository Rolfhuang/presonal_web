import React from 'react';
import ProjectItem from '../components/ProjectItem';
// import Dguy from '../assets/delivery_guy.jpg';
// import Proj1 from '../assets/proj1.jpg';
import "../styles/Projects.css";
import {projectList} from '../helper/ProjectList';

function Projects() {
  return (
    <div className='projects'>
      <h1>My Projects</h1>
      <div className='projectList'>
       {projectList.map((project, idx) => {
        return <ProjectItem name={project.name} image={project.image} id={idx}/>
       })}
      </div>
    </div>
  )
}

export default Projects