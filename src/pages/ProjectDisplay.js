import React from 'react';
import {useParams} from 'react-router-dom';
import { projectList } from '../helper/ProjectList';
import '../styles/ProjectDisplay.css';
import WebIcon from '@material-ui/icons/Web';
import Link from '@material-ui/core/Link';

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
        <Link href='https://deliveryguydemo.weebly.com/' target="_blank">
          <WebIcon />
        </Link>
    </div>
  )
}

export default ProjectDisplay