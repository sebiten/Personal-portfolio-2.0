import { GridProjects, ImgProjects } from "./StylesProyect";
import { projects } from "../../assets/img/index";

function Projects() {
  return (
    <GridProjects>
      <div>
        <ImgProjects src={projects.website} alt="" />
        <img src="" alt="" />
      </div>
      <div>
        <ImgProjects src={projects.musicfestival} alt="" />
      </div>
      <div>
        <ImgProjects src={projects.cripto} alt="" />
      </div>
      <div>
        <ImgProjects src={projects.popsout} alt="" />
      </div>
    </GridProjects>
  );
}

export default Projects;
