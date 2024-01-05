import React from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import SchoolIcon from '@material-ui/icons/School';
import WorkIcon from '@material-ui/icons/Work';

function Experience() {
  return (
    <div className='experience'>
        <VerticalTimeline lineColor='#3e497a'>
            <VerticalTimelineElement className='vertical-timeline-element--education' 
            date='2018 - 2022'
            iconStyle={{
                background: "#3e497a", color: "#fff"
            }}
            icon={<SchoolIcon/>}
            >
                <h3 className='vertical-timeline-element-title'>City College of New York, Queens, New York</h3>
                <h4 className='vertical-timeline-element-subtitle'>Bachelor of Science</h4>
                <p>Computer Science</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className='vertical-timeline-element--work' 
            date='2021.08 - 2022.03'
            iconStyle={{
                background: "#e9d35b", color: "#fff"
            }}
            icon={<WorkIcon/>}
            >
                <h3 className='vertical-timeline-element-title'>SoftworksAI, Queens, New York</h3>
                <h4 className='vertical-timeline-element-subtitle'>System QA Internship</h4>
                <p>maintain QA and develop internal QA tool for auto QA steps for data verification</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className='vertical-timeline-element--work' 
            date='2022.03 - 2023.07'
            iconStyle={{
                background: "#e9d35b", color: "#fff"
            }}
            icon={<WorkIcon/>}
            >
                <h3 className='vertical-timeline-element-title'>True AI, Queens, New York</h3>
                <h4 className='vertical-timeline-element-subtitle'>Software Engineer</h4>
                <p>Debugged a C++ software solution on Windows for mortgage data extraction using OCR technology, 
                    designed a versatile QA tool using PyQt5, Shell Script, and Python for automation, 
                    actively contributed to SDLC processes, enhanced Data Model accuracy, 
                    pioneered comprehensive data processes, monitored data pipelines, 
                    collaborated on innovative business solutions, 
                    and executed patching plans for software robustness.</p>
            </VerticalTimelineElement>
            <VerticalTimelineElement className='vertical-timeline-element--education' 
            date='2023 - Present'
            iconStyle={{
                background: "#3e497a", color: "#fff"
            }}
            icon={<SchoolIcon/>}
            >
                <h3 className='vertical-timeline-element-title'>Georgia Institute of Technology, Atlanta, GA</h3>
                <h4 className='vertical-timeline-element-subtitle'>Master of Science</h4>
                <p>Computer Science(AI/ML)</p>
            </VerticalTimelineElement>
        </VerticalTimeline>
    </div>
  )
}

export default Experience