import logosb from "../../assets/img/gg.png";
import { Img } from "../Hero/StylesHero";
import { FooterSection, A, Image } from "./StylesFooter";

function Footer() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <FooterSection>
      <A href="/">Made with love</A>
      <A href="/">
        <img 
        style={{ width: "60px", height: "60px" }}
        src={logosb} alt="logo" />
      </A>
      <A href="/">{date}</A>
    </FooterSection>
  );
}

export default Footer;
