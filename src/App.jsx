import './App.css'
import { Hero } from './components/Hero/Hero'
import {ContainerHero} from '../src/Containers/heroContainer'
import AboutMe from './components/AboutMe/AboutMe'
import Tech from './components/Technologies/Tech'

function App() {

  return (
    <ContainerHero>
      <Hero />
      <AboutMe/>
      <Tech/>
    </ContainerHero>
  )
}

export default App
