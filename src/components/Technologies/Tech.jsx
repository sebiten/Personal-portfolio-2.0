import { imgtech } from "../../assets/img/index";
import CardTech from "./CardTech";
import { SectionTech, ImgTechContainer,Wrapper, TitleTech, SpanTechTitle } from "./StylesTech";

function Tech() {
  return (
    <SectionTech id='projects'>
    <Wrapper>
      <TitleTech><SpanTechTitle>Technologies</SpanTechTitle></TitleTech>
    <ImgTechContainer >
    <CardTech imgtech={imgtech.html} description={`HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.`} name={'html'}/>
    <CardTech imgtech={imgtech.css} description={`CSS (Cascading Style Sheets) is used to style and layout web pages, to alter the font, color, size, columns, or add animations and other features.`} name={'css'}/>
    <CardTech imgtech={imgtech.js} description={`JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions,for Web pages.`}name={'Java Script'}/>
    <CardTech imgtech={imgtech.react} description={`React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components`}name={'React'}/>
    <CardTech imgtech={imgtech.tailwindcss} description={`Tailwind CSS makes it quicker to write and maintain the code of your application. By using this utility-first framework, you don't have to write custom CSS to style your application`}name={'Tailwind'}/>
    <CardTech imgtech={imgtech.styled} description={`Styled-components is a library built for React and React Native developers. It allows you to use component-level styles in your applications.`}name={'Styled'}/>
    <CardTech imgtech={imgtech.sass} description={`Sass (Syntactically Awesome Stylesheet) is a CSS pre-processor. Sass is completely compatible with all versions of CSS. Sass reduces repetition of CSS.`}name={'sass'}/>
    <CardTech imgtech={imgtech.git} description={`Git is a free and open source distributed code management and Version control system. In addition, Git is used for other applications including configuration management.`}name={'git'}/>
    </ImgTechContainer>
    </Wrapper>
    </SectionTech>
  );
}

export default Tech;
