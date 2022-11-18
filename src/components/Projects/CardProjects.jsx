import { projects } from "../../assets/img/index";
import { imgtech } from "../../assets/img/index";
import styled from 'styled-components'



function Card() {
  return (
    <CardProjects>
    <a href="">
      <ProjectImg src={projects.website} alt="" />
     </a>
      <Techimg src={imgtech.html} alt="" />
    </CardProjects>
  )
}
const CardProjects = styled.div`
    width: 350px;
    height: 300px;
    border: solid 2px white;
    border-radius: 10px;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    flex-direction: column;

`
const Techimg = styled.img`
     width: 30px;
     height: 30px;
     margin: 1rem auto;
`
const ProjectImg = styled.img`
    width: 300px;
    height: 200px;
    background-size: cover;
    background-repeat: no-repeat;
    object-fit: cover;
    border-radius: 10px;
`

export default Card
