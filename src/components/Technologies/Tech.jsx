import { imgtech } from "../../assets/img/index";
import CardTech from "./CardTech";
import {
  SectionTech,
  ImgTechContainer,
  Wrapper,
  TitleTech,
  Title,
} from "./StylesTech";

function Tech() {
  return (
    <SectionTech
    initial={{ x: -10, opacity: 1, scale: 1 }}
    animate={{ x: 0, opacity: 1, scale: 1 }}
    transition={{ duration: 3}}
    >
      <Wrapper>
        <TitleTech>
          <Title>Technologies</Title>
        </TitleTech>
        <ImgTechContainer>
          <CardTech imgtech={imgtech.html} name={"html"} />
          <CardTech imgtech={imgtech.css} name={"css"} />
          <CardTech imgtech={imgtech.js} name={"Java Script"} />
          <CardTech imgtech={imgtech.react} name={"React"} />
          <CardTech imgtech={imgtech.tailwindcss} name={"Tailwind"} />
          <CardTech imgtech={imgtech.styled} name={"Styled"} />
          <CardTech imgtech={imgtech.sass} name={"sass"} />
          <CardTech imgtech={imgtech.git} name={"git"} />
        </ImgTechContainer>
      </Wrapper>
    </SectionTech>
  );
}

export default Tech;
