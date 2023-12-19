import React from 'react';
import {useParams} from 'react-router-dom';
import { projectList } from '../helper/ProjectList';
import '../styles/ProjectDisplay.css';

function ProjectDisplay() {
    const {id} = useParams();
    const projectArr = projectList[id];
  return (
    <div className='project'>
        <h1>{projectArr.name}</h1>
        <img src={projectArr.image} alt='projectImage'/>
        <p>
            <b>Skills:</b>
            {projectArr.skills}
        </p>
    </div>
  )
}

export default ProjectDisplay