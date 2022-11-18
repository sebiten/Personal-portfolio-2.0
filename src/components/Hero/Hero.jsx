import avatar from "../../assets/img/avatar.png";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import { ImGithub } from "react-icons/im";
import {
  Container,
  Centered,
  Logo,
  Bg,
  P,
  SocialIcons,
  A,
} from "./StylesHero";
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
          <span>{text}</span>
          <Cursor cursorColor="#946e26" />
          </h1>
        </div>
        <P>Front end developer</P>
        <SocialIcons
          initial={{ x: 0, opacity: 0, scale: 1 }}
          animate={{ x: 0, opacity: 1, scale: 1 }}
          transition={{ duration: 1 }}
        >
          <A href="">
            <FaLinkedin size={50} style={{ color: "#946e26" }} />
          </A>
          <A href="">
            <FaTwitter size={50} style={{ color: "#946e26" }} />
          </A>
          <A href="">
            <ImGithub size={45} style={{ color: "#946e26" }} />
          </A>
        </SocialIcons>
      </Centered>
      <NavBar />
    </Container>
  );
}
