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
            date='2021.08 - 2023.07'
            iconStyle={{
                background: "#e9d35b", color: "#fff"
            }}
            icon={<WorkIcon/>}
            >
                <h3 className='vertical-timeline-element-title'>
                    <a href="https://true.ai/" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'underline' }}>
                        True AI(Formerly Softworks AI, LLC)
                    </a>
                    <br />
                    Queens, New York
                    </h3>
                <h4 className='vertical-timeline-element-subtitle'>Software Engineer</h4>
                <p>Debugged and developed C++ solutions to enhance input parameter handling, significantly improving system response times and performance.</p>
                <p>Improved backend workflows, increasing data flow efficiency and extraction accuracy by 20%. Improved large-scale ETL pipelines, accelerating processing speeds and data quality.</p>
                <p>Built a capable automation tools and data validation systems using Python, QT, Bash, Excel, and XML/JSON, increasing operational efficiency by 50% and enhance data transparency and accuracy.</p>
                <p>Improved the software that audits ~3,000 critical loan data points across ~200 forms, reducing document review times from hours to seconds with clear, concise output reports. Improved productivity for Loan Officers, Underwriters, and QC Specialists by efficiently resolving non-critical inconsistencies.</p>
                <p>Partnered with clients to refine and optimize data models, ensuring alignment with business goals and seamless integration into workflows and oversaw bug reporting using Jira.</p>
                <p>Monitored system performance and resolved pipeline issues, improving model accuracy and reliability before delivery.</p>
            </VerticalTimelineElement>
            
            <VerticalTimelineElement className='vertical-timeline-element--work' 
            date='2015.10 - 2018.08'
            iconStyle={{
                background: "#e9d35b", color: "#fff"
            }}
            icon={<WorkIcon/>}
            >
                <h3 className='vertical-timeline-element-title'>UNME Group
                <br />
                    Queens, New York
                </h3>
                <h4 className='vertical-timeline-element-subtitle'>Data Analysis & Operations</h4>
                <p>Led end-to-end analysis of customer behavior using Python and Amazon Seller Central, generating insights that increased repeat purchase rate by implementing targeted product recommendations and service improvements.</p>
                <p>Streamlined inventory management for 1,000+ SKUs through Excel automation and Amazon tools, resulting in 40% reduction in stockouts while maintaining optimal stock levels through data-driven reorder points.</p>
                <p>Analysis Amazon Business Reports data with Python enabling proactive inventory planning and reducing supply chain bottlenecks by 25%.</p>
                <p>Optimized Amazon PPC and Sponsored Products campaigns through performance analysis, achieving 30% improvement in ROAS through strategic bid adjustments and keyword optimization.</p>
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