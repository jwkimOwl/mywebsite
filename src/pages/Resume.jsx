
import './Resume.css'

function Resume() {

    return (
      <>
        
        <div className="body">
        <h2 id ="Education">
            Education
          </h2>
          <hr className='dividing-line'/>
          <div>
            <div className="inline-elements">
              <h3>Columbia University</h3> <p>B.S. in Computer Science | September 2024 - May 2028 (Expected) | New York, NY</p>
            </div>
            <ul>
                <li>Courses taken: Data Structures in Java, Introduction to Computing for Engineers and Applied Scientists, Linear Algebra</li>
                <li>GPA: 4.23/4.0</li>
              </ul>
          </div>
          <div>
            <div className="inline-elements">
              <h3>Gyeonggi Science High School for the Gifted</h3> <p>High School Diploma | March 2020 - February 2023 | Suwon, South Korea</p>
            </div>
              <ul>
                <li>Courses taken: Informatics Programming, Algorithm, Computer Programing (C, C++), Object-oriented Programming (Python), Simulation Programming (JAVA, Processing), Informatics Seminar (Android app development),
                Linear Algebra, Number Theory, Differential Equations, Multivariable Calculus
                </li>
                <li>GPA: 4.09/4.3</li>
              </ul>
          </div>
          <br/>

          <h2 id ="Experience">
            Experience
          </h2>
          <hr className='dividing-line'/>
          <div>
            <div className="inline-elements">
              <h3>Incoming Software Engineer Intern, Echo3D</h3> <p>Part-time | June 2025 - July 2025 | Remote</p>
            </div>
          </div>
          <div>
            <div className="inline-elements">
              <h3>Private Tutor</h3> <p>Part-time | September 2023 - Present | Remote / San Jose, CA</p>
            </div>
              <ul>
                <li>Tutored middle school/high school students in-person or via zoom</li>
                <li>Math: AMC prep, AIME prep, algebra 1/2, geometry, Pre-calculus, AP Calulus AB/BC</li>
                <li>Science: AP Physics 1/2, AP Physics C (Mechanics, Electricity and Magnetism), AP Computer Science A, Competitive Programming, Java, JavaScript, Python</li>
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
  
          <br/>
          <h2 id ="Leadership/Activities">
          Leadership/Activities
          </h2>
          <hr className='dividing-line'/>
          <div>
            <div className="inline-elements">
              <h3>Math Puzzles Club(Puzzlist) Founder/Captain</h3> <p>March 2018 - February 2020 | Seoul, South Korea</p>
            </div>
          </div>
          <div>
            <div className="inline-elements">
              <h3>Volleyball Team Captain</h3> <p>March 2017 - February 2020 | Seoul, South Korea</p>
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

          <br/>
        </div>
      </>
    )
  }
  
  export default Resume