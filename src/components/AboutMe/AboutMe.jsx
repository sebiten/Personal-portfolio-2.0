import photo from "../../assets/img/seba.webp";
import {
  Main,
  AboutGrid,
  Img,
  AboutMeTitle,
  Dowload,
  P,
  InfoContainer,
  BgContainer,
  FromSpan,
} from "./AboutMeStyles";
function AboutMe() {
  return (
    <Main id="about">
      <BgContainer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1 }}
        viewport={{ once: true }}
      >
        <AboutGrid>
          <div>
            <Img src={photo} alt="" />
          </div>
          <InfoContainer>
            <AboutMeTitle>About me</AboutMeTitle>
            <P>
              My name is Sebastian Burgos I am passionate about programming and
              technologies, i am 23 years old. Love all kind of challenges. I am
              a fast learner person, motivated for constant personal growing.
            </P>
            <P>
              <FromSpan>From:</FromSpan> Salta, Argentina
            </P>
            <Dowload>Dowload Cv</Dowload>
          </InfoContainer>
        </AboutGrid>
      </BgContainer>
    </Main>
  );
}

export default AboutMe;
