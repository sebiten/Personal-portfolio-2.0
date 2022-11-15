import { imgtech } from "../../assets/img/index";
import { SectionTech, Img, ImgTechContainer, Title, TitleTech, TechInfo, SpanTitles } from "./StylesTech";

function Tech() {
  return (
    <SectionTech>
      <Title><SpanTitles>Technologies</SpanTitles></Title>
      <ImgTechContainer>
        <TechInfo>
          <Img src={imgtech.html} alt="" />
          <TitleTech>Html</TitleTech>
          <p>HTML (HyperText Markup Language) is the most basic building block of the Web. It defines the meaning and structure of web content.</p>
        </TechInfo>
        <TechInfo>
          <Img src={imgtech.css} alt="" style={{height: '128px'}} />
          <TitleTech>Css</TitleTech>
          <p>CSS (Cascading Style Sheets) is used to style and layout web pages, to alter the font, color, size, columns, or add animations and other features.</p>
        </TechInfo>
        <TechInfo>
          <Img src={imgtech.js} alt="" />
          <TitleTech>Java Script</TitleTech>
          <p>JavaScript (often shortened to JS) is a lightweight, interpreted, object-oriented language with first-class functions,for Web pages.</p>
        </TechInfo>
        <TechInfo>
          <Img src={imgtech.sass} alt="" />
          <TitleTech>Sass</TitleTech>
          <p>Sass (Syntactically Awesome Stylesheet) is a CSS pre-processor. Sass is completely compatible with all versions of CSS. Sass reduces repetition of CSS.</p>
        </TechInfo>
        <TechInfo>
          <Img src={imgtech.react} alt="" />
          <TitleTech>React</TitleTech>
          <p>React is a declarative, efficient, and flexible JavaScript library for building user interfaces. It lets you compose complex UIs from small and isolated pieces of code called “components”.</p>
        </TechInfo>
        <TechInfo>
          <Img src={imgtech.git} alt="" />
          <TitleTech>Git</TitleTech>
          <p>Git is a free and open source distributed code management and Version control system. In addition, Git is used for other applications including configuration management.</p>
        </TechInfo>
        <TechInfo>
          <Img src={imgtech.tailwindcss} alt="" style={{width: '180px'}} />
          <TitleTech>Tailwindcss</TitleTech>
          <p>Tailwind CSS makes it quicker to write and maintain the code of your application. By using this utility-first framework, you don't have to write custom CSS to style your application</p>
        </TechInfo>
        <TechInfo>
          <Img src={imgtech.styled} alt="" />
          <TitleTech>STyled Components</TitleTech>
          <p>Styled-components is a library built for React and React Native developers. It allows you to use component-level styles in your applications.</p>
        </TechInfo>
      </ImgTechContainer>
    </SectionTech>
  );
}

export default Tech;
