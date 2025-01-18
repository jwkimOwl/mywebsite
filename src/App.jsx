import './App.css'
import Home from "./pages/Home"
import Resume from "./pages/Resume"
import Gallery from "./pages/Gallery"
import Contact from "./Contact"
import { Routes, Route, HashRouter } from "react-router-dom";
import NavigationBar from './navbar'
function App() {
  return (
    <>
    <HashRouter>
      <div>
      <NavigationBar></NavigationBar>
      <Routes>
      <Route path="/" element = {<Home />}/>
      <Route path="/Home" element = {<Home />}/>
      <Route path="/Resume" element = {<Resume />}/>
      <Route path="/Gallery" element = {<Gallery />}/>
      </Routes>
      <Contact></Contact>
      </div>
      </HashRouter>
    </>
  )
}

export default App

