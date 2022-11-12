import './App.css'
import { Hero } from './components/Hero/Hero'
import NavBar from './components/NavBar/NavBar'
import {ContainerHero} from '../src/Containers/heroContainer'

function App() {

  return (
    <ContainerHero>
      <Hero />
      <Hero />
    </ContainerHero>
  )
}

export default App
