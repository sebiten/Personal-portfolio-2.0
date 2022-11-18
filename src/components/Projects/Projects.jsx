import { GridProjects, TitleProjects } from "./StylesProyect";


import { Typewriter, Cursor, useTypewriter } from "react-simple-typewriter";
import Card from "./CardProjects";




function Projects() {
  const [text, count] = useTypewriter({
    words: ["<Projects/>"],
    delaySpeed: 2000,
  });
  return (
    <div>
      <TitleProjects
        initial={{ opacity: 0, scale: 1 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 3 }}
      >
        {text}
        <Cursor cursorColor="#946e26" />
      </TitleProjects>
      <GridProjects>
        <Card />
      </GridProjects>
    </div>
  );
}

export default Projects;
