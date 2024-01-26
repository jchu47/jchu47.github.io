import selfie from './assets/selfie.jpg';
import linkedin from './assets/linkedin.png';
import email from './assets/email.png';
import github from './assets/github.png';
import './App.css';
import ContactForm from './components/ContactForm';
import Timeline from './components/Timeline';

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
          including TypeScript, React, SQL, Python, Go, Docker and AWS.
        </p>
        <p>
          I particularly enjoy React development and backend work with Go or
          Python. I am currently in the trenches learning Java.  I enjoy the intricacies of lower level languages, but have a disdain of C++ and the C family. I hate manual memory management
        </p>
        <p>
          In my spare time I: Train various martial arts including
          muay thai, brazilian jiu jitsu, and boxing. Play videogames and learn about the mathematics and design behind their development.  Study Japanese and watch anime.
        </p>
      </div>
      <div id='timeline-container'>
        <h2>My Story</h2>
        <Timeline></Timeline>
      </div>
      <h2 className='highlight'>Portfolio</h2>
      <div id='Portfolio-Container'>
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
      </div>
      <div id='Contact'>
        <h2 className='highlight'>Contact Me</h2>
        <ContactForm></ContactForm>
      </div>
      <div className='image-list'>
        <li>
          <a href='https://www.linkedin.com/in/justin-chu-10a70a205/'>
            <img src={linkedin} alt='LinkedIn' className='logo'></img>
          </a>
        </li>
        <li>
          <a href='https://github.com/jchu47'>
            <img src={github} alt='Github' className='logo'></img>
          </a>
        </li>
        <li>
          <a href='mailto:justinchu24@gmail.com'>
            <img src={email} alt='Email' className='logo'></img>
          </a>
        </li>
      </div>
      <h3>Color Palete based on my Vscode Theme: SynthWave '84</h3>
    </>
  );
}

export default App;
