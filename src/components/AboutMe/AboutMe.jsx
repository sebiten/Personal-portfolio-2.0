import photo from "../../assets/img/seba.webp";
import {Main,AboutGrid, Img } from './AboutMeStyles'
import {Maquina } from '../Hero/StylesHero'
function AboutMe() {
  return (
    <Main>
        <AboutGrid>
          <div>
            <Img src={photo} alt="" />
          </div>
          <div>
            <Maquina style={{width: '9ch', margin: '1rem'}}>About me</Maquina>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium deserunt labore ducimus assumenda, tenetur numquam
              quas dolorem beatae minima amet natus vero animi odit, ea, est
              molestiae aspernatur ab. Molestiae.
            </p>
            <p>From: Salta, Argentina</p>
            <button>DowloadCV</button>
          </div>
        </AboutGrid>
    </Main>
  );
}

export default AboutMe;
