import banner from './img/Smaller Banner.png';
import ramen from './img/Red Ramen.png'
import './App.css';

const scheduleContent = [
  {
    name: '💼 Welcome to RGB 2022',
    time: '12:30 pm',
    desc: 'Welcome! RGB 2022 is about to begin!',
  },
  {
    name: '💼 Opening Remarks',
    time: '1:00 pm',
    desc: 'Welcome! RGB 2022 is about to begin!',
  },
  {
    name: "🍳 Fiona Kim Tran",
    title: "title",
    time: "1:15 pm",
    prez: "presentation",
    // link: "https://erikherrstrom.com/"
  },
  {
    name: "🍳 Carlo Velasquez",
    title: "title",
    time: "2:05 pm",
    prez: "presentation",
    // link: "https://erikherrstrom.com/"
  },
  {
    name: '💼 Intermission',
    time: '2:55 pm',
    desc: 'description',
  },
  {
    name: "🍳 Alena Eres",
    title: "title",
    time: "3:10 pm",
    prez: "presentation",
    // link: "https://erikherrstrom.com/"
  },
  {
    name: "🍳 Jennifer Sonderby",
    title: "title",
    time: "4:00 pm",
    prez: "presentation",
    // link: "https://erikherrstrom.com/"
  },
  {
    name: '💼 Networking & Office-Hours',
    time: '4:50 pm',
    desc: 'description',
  },
  {
    name: '💼 Closing & Raffle Winner',
    time: '5:50 pm',
    desc: 'description',
  },
]

function LandingContent() {
  return (
    <>
      <div className='introduction top fancyheading'>
        <h2 className='innod'>Innovative Design</h2>
        <p className='presents'>presents</p>
      </div>
      <div className='introduction bottom heading'>
        <h1 className='rgb'>Reach, Grow, Build</h1>
        <p className='info'>3/11/22, 1-6 pm @ Jacobs 310</p>
      </div>
      <div className='buttonContainer'>
        <a className='button learnMoreButton heading' href='/#what_is_rgb'>Learn More</a>
        <a className='button registerButton heading' href='https://forms.gle/DKG4VuyXSbU8kghz5' target='_blank' rel='noreferrer'>Register Now</a>
        <a className='button scheduleButton heading' href='/#schedule'>Schedule</a>
      </div>
    </>
  )
}

function Landing() {
  return (
    <div className='landing'>
      <LandingContent />
      <img src={banner} className='banner' alt='banner'></img>
    </div>
  )
}

function About() {
  return (
    <>
      <a id='what_is_rgb'></a>
      <div className='about'>
        <div className='aboutleft'>
          <h2 className='fancyheading aboutheading'>What is RGB?</h2>
          <div className='paragraphs'>
            <p className='body'>Reach, Grow, and Build your design career at RGB 2023 through an industry speaker series, workshops, and a networking event!</p>
            <p className='body'>We’ll be joined by speakers whose careers have taken through both freelance and corporate industries. Stay until the end for customized stickers, a raffle prize and themed goodies!</p>
          </div>
        </div>
        <div className='aboutright'>
          <img src={ramen} alt='ramen'></img>
        </div>
      </div>
    </>
  )
}

function ScheduleMapper ({content}) {
  return (
    <>
    {content.map(speaker => (
      <>
      {speaker.desc ? 
        <a href={speaker.link} className="speakerHover" target="_blank" rel="noreferrer">
          <div className='speakerleft'>
            <div className="speakerTime">{speaker.time}</div>
            <div className="speakerName">{speaker.name}</div>
          </div>
          <div className="speakerright speakerDesc">{speaker.desc}</div>
        </a>
        : 
        <a href={speaker.link} className="speakerHover" target="_blank" rel="noreferrer">
          <div className='speakerleft'>
            <div className="speakerTime">{speaker.time}</div>
            <div className="speakerName">{speaker.name}</div>
          </div>
          <div className="speakerright speakerPrez">"{speaker.prez}"</div>
        </a>
      }
      </>
    ))}
    </>
  )
}

function Schedule() {
  return (
    <>
      <a id='schedule'></a>
      <div className='bluebackground'>
        <div className="schedule">
          <h2 className='fancyheading scheduleheading'>Schedule</h2>
        </div>
        <ScheduleMapper content={scheduleContent}/>
      </div>
    </>
  )
}

function App() {
  return (
    <>
      <Landing />
      <About />
      <Schedule content={scheduleContent} />
      <div class="body bluebackground footer">
        <a href="https://innovativedesign.club/" target="_blank" rel="noreferrer">&copy; innovative design</a>
      </div>
    </>
  );
}

export default App;
