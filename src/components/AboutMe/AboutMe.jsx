import photo from "../../assets/img/seba.webp";
import {
  Main,
  AboutGrid,
  Img,
  AboutMeTitle,
  Dowload,
  P,
  InfoContainer,
  FromSpan,
} from "./AboutMeStyles";
function AboutMe() {
  return (
    <Main
      id="about"
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 3 }}
    >
      <AboutGrid>
        <div>
          <Img src={photo} alt="" 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.1 }}
          />
        </div>
        <InfoContainer>
          <AboutMeTitle
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.1 }}
          >
            About me
          </AboutMeTitle>
          <P
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.1 }}
          >
            My name is Sebastian Burgos I am passionate about programming and
            technologies, i am 23 years old. Love all kind of challenges. I am a
            fast learner person, motivated for constant personal growing.
          </P>
          <P
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 2.1 }}
          >
            <FromSpan>From:</FromSpan> Salta, Argentina
          </P>
          <Dowload
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
          >Dowload Cv</Dowload>
        </InfoContainer>
      </AboutGrid>
    </Main>
  );
}

export default AboutMe;
