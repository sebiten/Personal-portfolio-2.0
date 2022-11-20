import logo from "../../assets/img/sebdevspace.png";
import { LogoSeb, FooterSection, TextFooter } from "./StylesFooter";

function Footer() {
  return (
    <FooterSection>
      <div>
        <LogoSeb src={logo} alt="" />
      </div>
      <div>
        <h3>Made with love</h3>
      </div>
    </FooterSection>
  );
}

export default Footer;
