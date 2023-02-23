import logo from "../../assets/img/sebdevspace.png";
import { LogoSeb, FooterSection , HomeText } from "./StylesFooter";

function Footer() {
  const current = new Date();
  const date = `${current.getDate()}/${current.getMonth()+1}/${current.getFullYear()}`;
  return (
    <FooterSection>
      {/* <div>
        <HomeText
          href="/"
          >Back to home</HomeText>
      </div> */}
      <div>
        <h3>Made with love 🖤</h3>
        <p>last update: 22/02/2023</p>
      </div>
    </FooterSection>
  );
}

export default Footer;
