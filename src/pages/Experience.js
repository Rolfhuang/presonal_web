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
            date='2023 - Present'
            iconStyle={{
                background: "#3e497a", color: "#fff"
            }}
            icon={<SchoolIcon/>}
            >
                <h3 className='vertical-timeline-element-title'>Georgia Institute of Technology, Atlanta, GA</h3>
                <h4 className='vertical-timeline-element-subtitle'>Master of Science</h4>
                <p>Master of Science in Computer Science of Interactive Intelligence(AI)</p>
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
                <p>Resolved C++ solution errors on Windows for OCR-based mortgage data extraction, significantly enhancing system reliability and performance.</p>
                <p>Designed and implemented solutions for mortgage file data extraction, improving accuracy through optimized data processing techniques.</p>
                <p>Developed and optimized C++ functions to refine input parameter handling, boosting system efficiency.</p>
                <p>Built a comprehensive QA automation tool using QT, Bash, XML/JSON, and Python, increasing processing speed by 50%.</p>
                <p>Managed QA processes, including internal tools for data transfer, file management, and test method execution, improving workflow efficiency.</p>
                <p>Leveraged Python and XML/JSON for data analysis, validation, and visualization, improving data ingestion, transformation, and loading for large-scale repositories.</p>
                <p>Monitored data pipelines, proactively addressing performance bottlenecks and enhancing data model accuracy.</p>
                <p>Contributed to the design, testing, and maintenance of the software development lifecycle (SDLC), improving extraction accuracy and system performance.</p>
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
                <p>Implemented automation solutions using Bash and Python for testing, reducing manual effort, accelerating test cycles, and improving software quality.</p>
                <p>Classified and verified data using Python (pandas) to enhance data models.</p>
                <p>Managed dataset curation for address verification, developed requirements, test strategies, and oversaw bug reporting using Jira.</p>
                <p>Analyzed test data to uncover insights, visualize trends, and generate reports for stakeholders, aiding decision-making and QA monitoring.</p>
                <p>Fostered team collaboration to ensure efficient project workflows and successful outcomes.</p>
            </VerticalTimelineElement>

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
            
            
        </VerticalTimeline>
    </div>
  )
}

export default Experience