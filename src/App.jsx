import './App.css'
import { Hero } from './components/Hero/Hero'
import {ContainerHero} from '../src/Containers/heroContainer'
import AboutMe from './components/AboutMe/AboutMe'
import Tech from './components/Technologies/Tech'
import Projects from './components/Projects/Projects'
import Contact from './components/Contact/Contact'
// import Footer from './components/Footer/Footer'

function App() {

  return (
    <ContainerHero>
      <Hero />
      <AboutMe/>
      <Tech/>
      <Projects />
      <Contact />
      {/* <Footer /> */}
    </ContainerHero>
  )
}

export default App
