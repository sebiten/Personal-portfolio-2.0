import { imgtech } from "../../assets/img/index";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";

import CardTech from "./CardTech";
import { SectionTech, ImgTechContainer, TitleTech, Title } from "./StylesTech";

function Tech() {
  const [text, count] = useTypewriter({
    words: ["<Tecnologies/>", "Skills.jsx"],
    loop: true,
    delaySpeed: 2000,
  });
  return (
    <SectionTech
      initial={{ opacity: 0, scale: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 3 }}
    >
      <TitleTech>
        <Title
          initial={{ opacity: 0, scale: 1 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 3 }}
        >
          {text}
          <Cursor cursorColor="#461c39" />
        </Title>
      </TitleTech>
      <ImgTechContainer
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 1.5 }}
      >
        <CardTech imgtech={imgtech.html} name={"html"} />
        <CardTech imgtech={imgtech.css} name={"css"} />
        <CardTech imgtech={imgtech.js} name={"JavaScript"} />
        <CardTech imgtech={imgtech.react} name={"React"} />
        <CardTech imgtech={imgtech.tailwind} name={"Tailwind"} />
        <CardTech imgtech={imgtech.styled} name={"Styled"} />
        <CardTech imgtech={imgtech.sass} name={"sass"} />
        <CardTech imgtech={imgtech.git} name={"git"} />
        <CardTech imgtech={imgtech.vscode} name={"VsCode"} />
        <CardTech imgtech={imgtech.strapi} name={"Strapi"} />
        <CardTech imgtech={imgtech.remix} name={"Remix run"} />
        <CardTech imgtech={imgtech.mui} name={"MaterialUI"} />
      </ImgTechContainer>
    </SectionTech>
  );
}

export default Tech;
