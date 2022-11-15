import avatar from "../../assets/img/avatar.png";
import { FaLinkedin, FaTwitter } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import {
  Container,
  Centered,
  Logo,
  Bg,
  P,
  Maquina,
  SocialIcons,
  A,
} from "./StylesHero";
import NavBar from "../NavBar/NavBar";

export function Hero() {
  return (
    <Container>
      <Bg></Bg>
      <Centered>
        <Logo src={avatar} alt="sebiten" />
        <Maquina>{`Hi! I'm <Sebastian Burgos/>`}.</Maquina>
        <P>Front end developer</P>
        <SocialIcons>
          <A href="">
            <FaLinkedin size={50} />
          </A>
          <A href="">
            <FaTwitter size={50} />
          </A>
          <A href="">
            <ImGithub size={45} />
          </A>
        </SocialIcons>
        </Centered>
        <NavBar/>

    </Container>
  );
}
