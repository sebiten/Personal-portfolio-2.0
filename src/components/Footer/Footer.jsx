import logo from "../../assets/img/sebdevspace.png";
import { Img } from "../Hero/StylesHero";
import { FooterSection , HomeText, Image } from "./StylesFooter";

function Footer() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <FooterSection>
      <a
        href="/"
      >
        <Image
          src="src\assets\img\logo.png"
         />
      </a>
      <div>
        <h3>Made with love 🖤</h3>
        <p>last update: 28/02/2023</p>
      </div>
    </FooterSection>
  );
}

export default Footer;
