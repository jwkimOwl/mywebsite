import './Home.css';
import profilePicture from '../images/IMG_1555.jpeg';
function Home() {

    return (
      <>
        
        <div className="body">
            <div className="profile">
                <div className="introduction">
                <p>
                    Hi, I’m Hannah, a computer science student at Columbia University in the City of New York.
                    I’m passionate about leveraging technology to solve real-world problems and create positive change in society.
                    At Columbia, I’m diving into the fascinating worlds of math, statistics, and philosophy while exploring my creative side through music and theater arts.
                    Beyond academics, I’ve been an athlete for over six years, playing volleyball and basketball.
                    I’m currently seeking opportunities to grow as a software engineer and hope to contribute to groundbreaking innovations in the IT and startup space.
                    In the long term, I aspire to launch my own tech company and make a meaningful impact through entrepreneurship.
                    When I’m not coding or studying, you’ll likely find me tutoring students in STEM, enjoying great food in NYC (Sylvia’s is next on my list!), or brainstorming ideas that blend technology with adventure.
                    Let’s connect and build something amazing together!
                </p>
                </div>
                <img src={profilePicture} alt="Hannah Kim" />
          </div>
        </div>
      </>
    )
  }
  
  export default Home