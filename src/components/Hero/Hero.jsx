import avatar from "../../assets/img/avatar.png";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import { ImGithub } from "react-icons/im";
import logosb from "../../assets/img/logosb.png";
import {
  Container,
  Centered,
  Logo,
  Bg,
  P,
  SocialIcons,
  A,
  Maquina,
  Img,
} from "./StylesHero";
import NavBar from "../NavBar/NavBar";

export function Hero() {
  const [text, count] = useTypewriter({
    words: ["Hi! nice to meet you", "I am Sebastian Burgos"],
  });
  return (
    <Container id="home">
      <Bg></Bg>
      <Centered>
        <Logo src={avatar} alt="sebiten" />
        <div>
          <h1>
            <Maquina>{text}</Maquina>
            <Cursor cursorColor="#946e26" />
          </h1>
        </div>
        <P>Front end developer</P>
        <SocialIcons>
          <A target="blank" href="https://www.linkedin.com/in/sebdevspace/">
            <FaLinkedin size={30} style={{ color: "#946e26" }} />
          </A>
          <A target="blank" href="https://twitter.com/SebitenB">
            <FaTwitter size={30} style={{ color: "#946e26" }} />
          </A>
          <A target="blank" href="https://github.com/sebiten">
            <ImGithub size={30} style={{ color: "#946e26" }} />
          </A>
        </SocialIcons>
      </Centered>
      <NavBar />
    </Container>
  );
}
