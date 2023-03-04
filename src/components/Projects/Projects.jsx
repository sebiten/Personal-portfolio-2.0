import {
  GridProjects,
  TechLogoDesc,
  H2,
  ProjectsSection,
} from "./StylesProyect";
import arnoa from "../../assets/img/arnoa.png";
import { projects } from "../../assets/img/index";
import { imgtech } from "../../assets/img/index";
import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import Card from "./CardProjects";
import jp from "../../assets/img/jp.png";

function Projects() {
  const [text, count] = useTypewriter({
    words: ["< Some.Projects/>"],
    delaySpeed: 2000,
  });
  return (
    <ProjectsSection
    
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
      <GridProjects
        id="projects"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 2 }}
      >
        <Card
          repository={"https://github.com/sebiten/Kiosko-app"}
          url={"https://kiosko.up.railway.app/"}
          projects={projects.kiosko}
          imgtech={imgtech.next}
          imgtech2={imgtech.tailwind}
          imgtech3={imgtech.react}
          imgtech4={imgtech.prisma}
          description={
            "Kiosko app with Prisma Tailwind and Nextjs"
          }
        ></Card>
        <Card
          repository={"https://github.com/sebiten/Spotify-2.0"}
          url={"https://lyriks-musicplayer.netlify.app/"}
          projects={projects.musicplayer}
          imgtech={imgtech.react}
          imgtech2={imgtech.tailwind}
          imgtech3={imgtech.vite}
          imgtech4={imgtech.vscode}
          description={
            "Music player responsive with the following technologies "
          }
        ></Card>
        <Card
          repository={"https://github.com/sebiten/Arnoa-Srl"}
          url={"https://voluble-faun-a86bf8.netlify.app/"}
          projects={arnoa}
          imgtech={imgtech.next}
          imgtech2={imgtech.tailwind}
          imgtech3={imgtech.react}
          imgtech4={imgtech.vscode}
          description={
            "Arnoa SRL Website with the following technologies"
          }
        ></Card>
        <Card
          repository={"https://github.com/sebiten/movie-app"}
          url={"https://earnest-pithivier-e91468.netlify.app/"}
          projects={jp}
          imgtech={imgtech.next}
          imgtech2={imgtech.tailwind}
          imgtech3={imgtech.vscode}
          imgtech4={imgtech.react}
          description={
            "Simple Movie app with the following technologies"
          }
        ></Card>
      </GridProjects>
    </ProjectsSection>
  );
}

export default Projects;
