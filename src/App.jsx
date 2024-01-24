import selfie from './assets/selfie.jpg';
import './App.css';
import ContactForm from './ContactForm';
import Timeline from './Timeline';

function App() {
  return (
    <>
      <div id='selfie-container'>
        <img src={selfie} id='selfie'></img>
      </div>
      <h1>Justin Chu</h1>
      <h2>Software Engineer</h2>
      <div className='about'>
        <p>
          I am a Full Stack Developer proficient in a variety of technologies,
          including Python, TypeScript, React, Node.js, SQL, Docker and AWS.
        </p>
        <p>
          I particularly enjoy React development and backend work with Go or
          Python. I am currently learning Java as I enjoy learning lower level
          intricacies.
        </p>
        <p>
          In my spare time I enjoy training several martial arts and learning
          the mathematics behind video game development.
        </p>
      </div>
      <div id='timeline-container'>
        <h2>My Story</h2>
        <Timeline></Timeline>
      </div>
      <div id='Portfolio-Container'>
        <h2 className='highlight'>Portfolio</h2>
        <a href='https://github.com/oslabs-beta/Dockasaurus-RX'>
          <div className='project'>
            <h2 className='project-title'>Dockasaurus-RX</h2>
            <h3>Open-Source Docker extension to visualize container metrics</h3>
            <ul className='skills'>
              {[
                'Typescript',
                'React',
                'Node',
                'Docker',
                'Grafana',
                'Prometheus',
              ].map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </a>
        <a href='https://www.gratitudelandscaping.com/'>
          <div className='project'>
            <h2 className='project-title'>Gratitude Landscapping</h2>
            <h3>Official Website for a Long Island Landscaping Business</h3>
            <ul className='skills'>
              {['Javascript', 'HTML5', 'CSS', 'Google Sheets'].map(
                (skill, index) => (
                  <li key={index}>{skill}</li>
                ),
              )}
            </ul>
          </div>
        </a>
        <a href='https://github.com/jchu47/OpenCLIDocs'>
          <div className='project'>
            <h2 className='project-title'>OpenCLIDocs</h2>
            <h3>CLI tool to generate code documentation utilizing OpenAI</h3>
            <ul className='skills'>
              {['Golang', 'Cobra', 'OpenAI'].map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </a>
        <a href='https://github.com/SwolePandas-LLC/get-swell'>
          <div className='project'>
            <h2 className='project-title'>Get-Swell</h2>
            <h3>
              Health and wellness-oriented social platform inspired by Instagram
            </h3>
            <ul className='skills'>
              {[
                'Javascript',
                'React',
                'Node',
                'Express',
                'MongoDB',
                'Bcrypt',
                'Cloudinary',
              ].map((skill, index) => (
                <li key={index}>{skill}</li>
              ))}
            </ul>
          </div>
        </a>
        <div id='Contact'>
          <h2 className='highlight'>Contact Me</h2>
          <ContactForm></ContactForm>
        </div>
      </div>
    </>
  );
}

export default App;
