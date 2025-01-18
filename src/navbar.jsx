import './navbar.css'

function NavigationBar(){
    return(
           <>
	           <nav>
					     <h1 id= "name">
					         Hannah J. Kim
					     </h1>
					     <div>
					          <ul id = "navbar">
					               <li><a href="#/Home">Home</a> </li>
					               <li><a href="#/Resume">Resume/CV</a></li>
					               <li><a href="#/Gallery">Gallery</a></li>
					          </ul>
					     </div>
					    </nav>
           </>
    )
}

export default NavigationBar