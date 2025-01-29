import './Home.css';
import profilePicture from '../images/ProfilePicture.jpeg';
function Home() {

    return (
      <>
        
        <div className="body">
            <div className="profile">
                <div className="introduction">
                    <p>
                    Hi, I’m Hannah Kim, a computer science enthusiast with a passion for innovation, creativity,
                    and exploring the limitless possibilities of technology. Currently studying at Columbia University,
                    I’m driven by a desire to create meaningful solutions that bridge the gap between human potential
                    and technological advancement.
                    </p>
                    <p>
                    I’m fascinated by the intersection of math, statistics, and computer science and
                    how they can be harnessed to tackle real-world challenges.
                    At the same time, I find joy in exploring the arts, whether it’s through
                    music, theater, or discovering the vibrant culinary scene of New York City.
                    </p>
                    <p>
                    For me, every challenge is an opportunity to grow, explore, and innovate.
                    Whether it’s diving into a complex coding problem,
                    brainstorming startup ideas, or mentoring students in STEM,
                    I believe in embracing curiosity and pushing my boundaries to unlock new possibilities.
                    </p>
                    <p>
                    Let’s connect—I’d love to collaborate, learn, and dream together!
                    </p>
                </div>
                <img src={profilePicture} alt="Hannah Kim" />
          </div>
        </div>
      </>
    )
  }
  
  export default Home