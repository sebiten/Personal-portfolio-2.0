import { projects } from "../../assets/img/index";
import { motion } from "framer-motion";
import { imgtech } from "../../assets/img/index";
import styled from 'styled-components'



function Card({imgtech, imgtech2, imgtech3, projects, description,}) {
  return (
    <CardProjects>
      <CardWrapper>
    <Enlace href="">
      <ProjectImg src={projects} alt="" />
     </Enlace>
      <P>{description}:</P>
      <ImgWrapper>
      <Techimg src={imgtech} alt="logotech" />
      <Techimg src={imgtech2} alt="logotech" />
      <Techimg src={imgtech3} alt="logotech" />
      </ImgWrapper>
      </CardWrapper>
    </CardProjects>
  )
}
const CardProjects = styled(motion.div)`
    width: 350px;
    border: solid 2px white;
    border-radius: 10px;
    background: rgba(0,0,0, 0.4);


`
const Enlace = styled.a`
      filter: grayscale(1);
    transition: 1s;
    margin-bottom: 1rem;
    :hover {
      filter:none;
      transform: scale(110%)
    
    }

`
export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  align-items: center;
  `
export const P =styled.p `
    width: 85%;
    text-align: center;
    letter-spacing: -0.02em;

`
export const CardWrapper = styled.div`
    width: 100%;
    margin: 1rem 0;
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
