import avatar from "../../assets/img/avatar.png";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import { ImGithub } from "react-icons/im";
import { Container, Centered, Logo, Bg, P, SocialIcons, A, Maquina } from "./StylesHero";
import NavBar from "../NavBar/NavBar";

export function Hero() {
  const [text, count] = useTypewriter({
    words: [
      "Hi! Im Sebastian Burgos",
      "Guy-who-loves-coffe.jsx",
      "<But loves to code more/>",
    ],
    loop: true,
    delaySpeed: 2000,
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
        <SocialIcons
          initial={{ x: 0, opacity: 0, scale: 1 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
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
