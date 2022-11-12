import image from "../../assets/img/mostaza-wallpaper.jpg";
import avatar from "../../assets/img/avatar.png";
import { FaLinkedin, FaTwitter, FaGit } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import {
  Container,
  Img,
  Centered,
  Logo,
  Bg,
  P,
  Maquina,
  SocialIcons,
  A,
} from "./StylesHero";
import { ButtonStyle } from "../Button/Button";
import NavBar from "../NavBar/NavBar";
import { NavBarContainer } from "../../Containers/navBarContainer";

export function Hero() {
  return (
    <Container>
      <Img src={image} alt="bg" />
      <Bg></Bg>
      <Centered>
        <Logo src={avatar} alt="sebiten" />
        <Maquina>Hi! I'm Sebastian Burgos.</Maquina>
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
        <NavBarContainer>
        <NavBar/>
        </NavBarContainer>
      </Centered>
    </Container>
  );
}
