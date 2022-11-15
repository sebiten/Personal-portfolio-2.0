import photo from "../../assets/img/seba.webp";
import {Main,AboutGrid, Img, AboutMeTitle, Dowload, P, ImgContainer, InfoContainer } from './AboutMeStyles'
function AboutMe() {
  return (
    <Main>
        <AboutGrid>
          <ImgContainer>
            <Img src={photo} alt="" />
          </ImgContainer>
          <InfoContainer>
            <AboutMeTitle style={{width: '9ch', margin: '1rem'}}>About me</AboutMeTitle>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium deserunt labore ducimus assumenda, tenetur numquam
              quas dolorem beatae minima amet natus vero animi odit, ea, est
              molestiae aspernatur ab. Molestiae.
            </P>
            <p>From: Salta, Argentina</p>
            <Dowload>Dowload Cv</Dowload>

          </InfoContainer>
        </AboutGrid>
    </Main>
  );
}

export default AboutMe;
