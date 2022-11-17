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
import { motion } from "framer-motion"

export function Hero() {
  return (
    <Container id='home'>
      <Bg></Bg>
      <Centered>
        <Logo src={avatar} alt="sebiten" />
        <Maquina
        >Hi! I'm Sebastian Burgos.</Maquina>
        <P>Front end developer</P>
        <SocialIcons 
         initial={{ x:0, opacity: 0, scale: 1 }}
         animate={{ x: 0, opacity: 1, scale: 1 }}
         transition={{ duration: 1 }}>
          <A href="">
            <FaLinkedin size={50} style={{color:'#946e26'}} />
          </A>
          <A href="">
            <FaTwitter size={50} style={{color:'#946e26'}} />
          </A>
          <A href="">
            <ImGithub size={45} style={{color:'#946e26'}} />
          </A>
        </SocialIcons>
        </Centered>
        <NavBar/>

    </Container>
  );
}
