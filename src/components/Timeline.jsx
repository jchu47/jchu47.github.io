import {
  VerticalTimeline,
  VerticalTimelineElement,
} from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import '../App.css';
import bartender from '../assets/bartender.png';
import data from '../assets/data.png';
import keyboard from '../assets/keyboard.png';
import nurse from '../assets/nurse.png';
import smile from '../assets/smile.png';

function Timeline() {
  return (
    <VerticalTimeline>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: 'rgb(46,33,87)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(146,0,117)' }}
        date='2018 - 2020'
        iconStyle={{ background: 'rgb(146,0,117)', color: '#fff' }}
        icon={<img className='time-icon' src={bartender} />}>
        <h3 className='vertical-timeline-element-title'>Bartender</h3>
        <h4 className='vertical-timeline-element-subtitle'>
          Port Jefferson, NY
        </h4>
        <p>
          Banquet Server to Bartender and promoted to Head Bartender. Served at
          formal events such as weddings and aniversaries. In charge of bar
          maintenance, stock and service.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: 'rgb(46,33,87)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(146,0,117)' }}
        date='2016 - 2021'
        iconStyle={{ background: 'rgb(146,0,117)', color: '#fff' }}
        icon={<img className='time-icon' src={nurse} />}>
        <h3 className='vertical-timeline-element-title'>Nursing School</h3>
        <h4 className='vertical-timeline-element-subtitle'>
          Stony Brook University
        </h4>
        <p>BSRN including clinical rotations</p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: 'rgb(46,33,87)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(146,0,117)' }}
        date='2022 - 2023'
        iconStyle={{ background: 'rgb(146,0,117)', color: '#fff' }}
        icon={<img className='time-icon' src={data} />}>
        <h3 className='vertical-timeline-element-title'>Data Analyst</h3>
        <h4 className='vertical-timeline-element-subtitle'>
          Nassau Candy Distributors, Inc
        </h4>
        <p>
          Utilized SQL, Python and Excel to generate reports. Restructured
          product data to be in line with a desired CRM format.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: 'rgb(46,33,87)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(146,0,117)' }}
        date='2023'
        iconStyle={{ background: 'rgb(146,0,117)', color: '#fff' }}
        icon={<img className='time-icon' src={keyboard} />}>
        <h3 className='vertical-timeline-element-title'>
          Software Engineer Immersive Bootcamp
        </h3>
        <h4 className='vertical-timeline-element-subtitle'>Codesmith</h4>
        <p>
          Intensive software engineering bootcamp. Worked with a team of
          engineers under industry professionals. Contributed to the open-source
          community with a Docker Extension. Currently over 10,000 downloads
          across platforms.
        </p>
      </VerticalTimelineElement>
      <VerticalTimelineElement
        className='vertical-timeline-element--work'
        contentStyle={{ background: 'rgb(46,33,87)', color: '#fff' }}
        contentArrowStyle={{ borderRight: '7px solid  rgb(146,0,117)' }}
        date='Current'
        iconStyle={{ background: 'rgb(146,0,117)', color: '#fff' }}
        icon={<img className='time-icon' src={smile} />}>
        <h3 className='vertical-timeline-element-title'>
          Free Lance Software Engineer
        </h3>
        <h4 className='vertical-timeline-element-subtitle'>
          Data Annotation Tech
        </h4>
        <p>
          Assists in training various AI models by evaluating code quality
          produced for correctness and performance. Assessing languanges such as
          Python, Javascript/Typescript, Java, C++ and their various libraries
          and frameworks.
        </p>
      </VerticalTimelineElement>
    </VerticalTimeline>
  );
}

export default Timeline;
