import { GridProjects, TechLogoDesc, H2, ProjectsSection } from "./StylesProyect";

import { projects } from "../../assets/img/index";
import { imgtech } from "../../assets/img/index";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import Card from "./CardProjects";




function Projects() {
  const [text, count] = useTypewriter({
    words: ["< Some.Projects/>"],
    delaySpeed: 2000,
  });
  return (
    <ProjectsSection
    id='projects'
    initial={{ opacity: 0 }}
    whileInView={{ opacity: 1 }}
    transition={{ duration: 2 }}
    >
      <H2
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3 }}
      >
        {text}
        <Cursor cursorColor="#946e26" />
      </H2>
      <GridProjects>
        <Card 
        repository= {'https://github.com/sebiten/personal-website'}
        url={'https://sebdevspace.netlify.app'}
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ duration: 1.5 }}
        projects={projects.website}
        imgtech={imgtech.html} 
        imgtech2={imgtech.css} 
        imgtech3={imgtech.js}
        imgtech4={imgtech.vscode}

        description={'First Portfolio Responsive using the following technologies'}>
        </Card>
        <Card
        repository={'https://github.com/sebiten/Personal-portfolio-2.0'}
         url={'https://sebdev.netlify.app/'}
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ duration: 1.5 }}
        projects={projects.websitetwo}
        imgtech={imgtech.react} 
        imgtech2={imgtech.styled} 
        imgtech3={imgtech.vite}
        imgtech4={imgtech.vscode}

        description={'Second Portfolio Responsive using the following technologies'}>
        </Card>
        <Card 
        repository={'https://github.com/sebiten/Cryptos-now'}
         url={'https://aquamarine-froyo-207d3e.netlify.app'}
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ duration: 1.5 }}
        projects={projects.cripto}
        imgtech={imgtech.react} 
        imgtech2={imgtech.styled} 
        imgtech3={imgtech.vite}
        imgtech4={imgtech.vscode}

        description={'Cryptos Now fetching API with the following technologies '}>
        </Card>
        <Card 
        repository={'https://github.com/sebiten/Music'}
         url={'https://silver-elf-d48d36.netlify.app/'}
             initial={{ opacity: 0 }}
             whileInView={{ opacity: 1 }}
             transition={{ duration: 1.5 }}
        projects={projects.musicfestival}
        imgtech={imgtech.html} 
        imgtech2={imgtech.css} 
        imgtech3={imgtech.js}
        imgtech4={imgtech.sass}
        description={'Festival Music Responsive with the following technologies'}>
        </Card>
      </GridProjects>
    </ProjectsSection>
  );
}

export default Projects;
