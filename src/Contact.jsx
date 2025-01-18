import instagram from "./images/Instagram_Glyph_Gradient.png"
import linkedin from "./images/LI-In-Bug.png"
import github from "./images/github-mark.png"
import "./Contact.css"
function Contact() {

    return (
      <>
        <footer>
          <div id="footerContent">
              <a href="https://www.instagram.com/_i__lmno/" target="_blank">
                <img src={instagram} alt="Instagram Icon" width="25px" height="25px"/>
              </a>
              <a href="https://www.linkedin.com/in/hannahjaywonkim/" target="_blank">
                <img className="linkedin-logo" src={linkedin} alt="LinkedIn Icon" width="30px" height="25px"/>
              </a>
              <a href="https://github.com/jwkimOwl" target="_blank">
                <img src={github} alt="Github Icon" width="25px" height="25px"/>
              </a>
              <h3><a href="mailto:hannah.jaywon.kim@gmail.com">hannah.jaywon.kim@gmail.com</a></h3>
              <h3>New York, NY, USA</h3>
            </div>
        </footer>
      </>
    )
  }
  
  export default Contact