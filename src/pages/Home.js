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
                
                <EmailIcon />
            </div>
        </div>
        <div className='skills'>
            <h1>Skills</h1>
            <ol className='list'>
                <li className='item'>
                    <h2>Front-End</h2>
                    <span>React, PyQt5, CSS</span>
                </li>
                <li className='item'>
                    <h2>Back-End</h2>
                    <span>PyQt5, NodeJS, .NET, SQL</span>
                </li>
                <li className='item'>
                    <h2>Languages</h2>
                    <span>C++, C#, Python, Java, JS, Regular Expressions</span>
                </li>
            </ol>
        </div>
    </div>
  )
}

export default Home
