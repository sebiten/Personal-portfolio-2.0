import './App.css'
import { Hero } from './components/Hero/Hero'
import {ContainerHero} from '../src/Containers/heroContainer'

function App() {

  return (
    <ContainerHero>
      <Hero />
    </ContainerHero>
  )
}

export default App
