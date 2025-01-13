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
	    <h1 id ="Heading">
	      Hannah J. Kim
	    </h1>
      <h2 id ="Subheading">
        Experience
      </h2>
      <hr className='dividing-line'/>
	    <p id ="Paragraph">
	      This is a paragraph. You can type stuff you want to see here.
	    </p>
	    <p id = "Next">
	      This is used for another paragraph.
	    </p>
    </>
  )
}

export default App