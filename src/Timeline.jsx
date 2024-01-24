import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import './App.css'

function Timeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: 'rgb(46,33,87)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(146,0,117)' }}
        date='2014 - 2022'
        iconStyle={{ background: 'rgb(146,0,117)', color: '#fff' }}
        icon={<p></p>}>
        <h3 className='vertical-timeline-element-title'>Bartender</h3>
        <h4 className='vertical-timeline-element-subtitle'>Port Jefferson, NY</h4>
        <p>
          Banquet Server to Bartender and promoted to Head Bartender.  Served at formal events such as weddings and aniversaries.  In charge of bar maintenance, stock and service.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: 'rgb(46,33,87)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(146,0,117)' }}
        date='2018 - 2020'
        iconStyle={{ background: 'rgb(146,0,117)', color: '#fff' }}
        icon={<p></p>}>
        <h3 className='vertical-timeline-element-title'>Nursing School</h3>
        <h4 className='vertical-timeline-element-subtitle'>Suffolk County Community College</h4>
        <p>
          LPN Program including clinical rotations.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: 'rgb(46,33,87)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(146,0,117)' }}
        date='2022 - 2023'
        iconStyle={{ background: 'rgb(146,0,117)', color: '#fff' }}
        icon={<p></p>}>
        <h3 className='vertical-timeline-element-title'>Data Analyst</h3>
        <h4 className='vertical-timeline-element-subtitle'>Nassau Candy Distributors, Inc</h4>
        <p>
          Utilized SQL, Python and Excel to generate reports.
          Restructured product data to be in line with a desired CRM format.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: 'rgb(46,33,87)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(146,0,117)' }}
        date='2022 - 2023'
        iconStyle={{ background: 'rgb(146,0,117)', color: '#fff' }}
        icon={<p></p>}>
        <h3 className='vertical-timeline-element-title'>Codesmith</h3>
        <h4 className='vertical-timeline-element-subtitle'>Remote</h4>
        <p>
          Completed a Software Engineering Immersive Bootcamp.  Learned the necessary technical skills and collaborative skills to work in a team of software engineers.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: 'rgb(46,33,87)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(146,0,117)' }}
        date='Today'
        iconStyle={{ background: 'rgb(146,0,117)', color: '#fff' }}
        icon={<p></p>}>
        <h3 className='vertical-timeline-element-title'>Software Engineer</h3>
        <h4 className='vertical-timeline-element-subtitle'>Long Island, NY</h4>
        <p>
          Looking to join a team and build my skills as a software engineer.
        </p>
      </VerticalTimelineElement>



    </VerticalTimeline>

  );
}

export default Timeline;
