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
        <a target='blank' href="https://www.linkedin.com/in/sebdevspace/">
       <SocialCard CardBg="Linkedin">
          <FaLinkedin color="white" size={50} />
       </SocialCard>
        </a>
        <a target='blank' href="mailto:sebdevspace@gmail.com">
      <SocialCard CardBg="Gmail">
          <SiGmail color="white" size={50} />
      </SocialCard>
        </a>
        <a target='blank' href="https://github.com/sebiten">
      <SocialCard CardBg="Github">
          <FaGithub color="white" size={50} />
      </SocialCard>
        </a>
     
        <a target='blank' href="https://twitter.com/SebitenB">
      <SocialCard CardBg="Twitter">
          <FaTwitter color="white" size={50} />
      </SocialCard>
        </a>
    </GridSocial>
    </SectionContact>
  );
}

export default Contact;
