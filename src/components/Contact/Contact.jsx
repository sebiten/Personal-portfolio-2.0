import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import { SocialCard, GridSocial, ContactTitle, SectionContact } from "./StylesContact";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
function Contact() {
  const [text, count] = useTypewriter({
    words: ["<Contact/>"],
    delaySpeed: 2000,
  });
  return (
    <SectionContact>
    <ContactTitle>
      {text}
    <Cursor />
    </ContactTitle>
    <GridSocial id="contact">
        <a href="">
       <SocialCard CardBg="Linkedin">
          <FaLinkedin color="white" size={50} />
       </SocialCard>
        </a>
        <a href="">
      <SocialCard CardBg="Gmail">
          <SiGmail color="white" size={50} />
      </SocialCard>
        </a>
        <a href="">
      <SocialCard CardBg="Github">
          <FaGithub color="white" size={50} />
      </SocialCard>
        </a>
     
        <a href="">
      <SocialCard CardBg="Linkedin">
          <FaTwitter color="white" size={50} />
      </SocialCard>
        </a>
    </GridSocial>
    </SectionContact>
  );
}

export default Contact;
