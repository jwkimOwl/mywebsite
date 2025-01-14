import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  return (
    <>
      <div className="menu-bar">
        <ul>
          <li><a href="#home">Home</a></li>
          <li><a href="#about">About</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
      <div className="body">
        <h1 id ="Heading">
          Hannah J. Kim
        </h1>

        <h2 id ="Experience">
          Experience
        </h2>
        <hr className='dividing-line'/>
        <div>
          <div className="inline-elements">
            <h3>Software Engineer Intern, PozaLabs</h3> <p>Full-time | June 2022 - July 2022 | Seoul, South Korea</p>
          </div>
            <ul>
              <li>Utilized data preprocessing techniques and generative AI to produce MIDI files</li>
              <li>Managed the company’s tech blog to highlight innovations</li>
              <li>Developed a well-rounded understanding of startup operations and industry dynamics</li>
            </ul>
        </div>
        <div>
          <div className="inline-elements">
            <h3>Intern, PozaLabs</h3> <p>Full-time | June 2022 - July 2022 | Seoul, South Korea</p>
          </div>
            <ul>
              <li>Utilized data preprocessing techniques and generative AI to produce MIDI files</li>
              <li>Managed the company’s tech blog to highlight innovations</li>
              <li>Developed a well-rounded understanding of startup operations and industry dynamics</li>
            </ul>
        </div>
        <div>
          <div className="inline-elements">
            <h3>Student Intern, Co-op Center for Research Facilities at Sungkyunkwan University</h3> <p>Full-time | June 2020 - June 2020 | Suwon, South Korea</p>
          </div>
        </div>

        <br/>
        <h2 id ="Volunteer">
          Volunteer
        </h2>
        <hr className='dividing-line'/>
        <div>
          <div className="inline-elements">
            <h3>Volunteer Instructor, Daechu-gol Library</h3> <p>April 2020 - December 2021 | Suwon, South Korea</p>
          </div>
            <ul>
              <li>Taught how math and science is used in real life to 3-4 grade students via zoom</li>
              <li>Utilized various instructional methods such as lectures, hands-on activities, visual aids</li>
            </ul>
        </div>
      </div>
    </>
  )
}

export default App