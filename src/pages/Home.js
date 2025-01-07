import React from 'react';
import LinkedInIcon from '@material-ui/icons/LinkedIn';
import EmailIcon from '@material-ui/icons/Email';
import GithubIcon from '@material-ui/icons/GitHub';
import '../styles/Home.css';
import Link from '@material-ui/core/Link';

function Home() {
  return (
    <div className='home'>
        <div className='about'>
            <h2>Hi, My name is Ruixiang Huang.</h2>
            <div className='prompt'>
                <Link href='https://www.linkedin.com/in/ruixiang-huang-aa0a931b5' target="_blank">
                    <LinkedInIcon />
                </Link>
                {/* <LinkedInIcon /> */}
                {/* <GithubIcon /> */}
                <Link href='https://github.com/Rolfhuang' target="_blank">
                    <GithubIcon />
                </Link>
                
                <Link href='mailto:rolfhuang1215@gmail.com'>
                    <EmailIcon />
                </Link>
            </div>
            <h3>Page pending update...</h3>
        </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>Front-End</h2>
                    <span>React, Unity, Android Studio, Room Database</span>
                </li>
                <li className='item'>
                    <h2>Back-End</h2>
                    <span>Django, Spring Boot, PySpark, SQL (MySQL, PostgreSQL), REST APIs, ETL Pipelines</span>
                </li>
                <li className='item'>
                    <h2>Languages</h2>
                    <span>C++, C#, Python, Java, Kotlin, JavaScript, Golang, Bash</span>
                </li>
                <li className='item'>
                    <h2>Machine Learning/Deep Learning</h2>
                    <span>PyTorch, TensorFlow, Scikit-learn, NumPy, Pandas</span>
                </li>
                <li className='item'>
                    <h2>Tools</h2>
                    <span>Git, PyCharm, Visual Studio, Unity, Unreal Engine, Jupyter Notebook, AWS, Jira</span>
                </li>
                <li className='item'>
                    <h2>Operating Systems</h2>
                    <span>Windows, macOS, Linux (Ubuntu, Arch)</span>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home
