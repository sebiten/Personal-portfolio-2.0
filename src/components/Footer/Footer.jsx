import logo from "../../assets/img/logosb.png";
import { Img } from "../Hero/StylesHero";
import { FooterSection, A , Image } from "./StylesFooter";

function Footer() {
  const current = new Date();
  const date = `${current.getDate()}/${
    current.getMonth() + 1
  }/${current.getFullYear()}`;
  return (
    <FooterSection>
        <A href="/">
         Back to home
        </A>
        <A href="/">
          [ SB ]
        </A>
        <A href="/">
          {date}
        </A>
    </FooterSection>
  );
}

export default Footer;
