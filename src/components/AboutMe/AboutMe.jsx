import photo from "../../assets/img/seba.webp";
import {Main,AboutGrid, Img, AboutMeTitle, Dowload, P, InfoContainer,BgContainer  } from './AboutMeStyles'
function AboutMe() {
  return (
    <Main>
      <BgContainer>
        <AboutGrid>
          <div>
            <Img src={photo} alt="" />
          </div>
          <InfoContainer>
            <AboutMeTitle>About me</AboutMeTitle>
            <P>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Accusantium deserunt labore ducimus assumenda, tenetur numquam
              quas dolorem beatae minima amet natus vero animi odit, ea, est
              molestiae aspernatur ab. Molestiae.
            </P>
            <P>From: Salta, Argentina</P>
            <Dowload>Dowload Cv</Dowload>

          </InfoContainer>
        </AboutGrid>
        </BgContainer>
    </Main>
  );
}

export default AboutMe;
