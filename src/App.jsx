import './App.css'
import { Hero } from './components/Hero/Hero'
import AboutMe from './components/AboutMe/AboutMe'
import Tech from './components/Technologies/Tech'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {

  return (
    <div>
      <Hero />
      <AboutMe/>
      <Tech/>
      <Projects />
      <Contact />
      <Footer />
    </div>
  )
}

export default App
