import { projects } from "../../assets/img/index";
import { motion } from "framer-motion";
import { imgtech } from "../../assets/img/index";
import styled from "styled-components";

function Card({
  imgtech,
  imgtech2,
  imgtech3,
  projects,
  description,
  url,
  repository,
  imgtech4,
}) {
  return (
    <CardProjects>
      <CardWrapper>
        <Enlace target="blank" href={url}>
          <ProjectImg src={projects} alt="" />
        </Enlace>
        <P>{description}:</P>
        <ImgWrapper>
          <Techimg src={imgtech} alt="logotech" />
          <Techimg src={imgtech2} alt="logotech" />
          <Techimg src={imgtech3} alt="logotech" />
          <Techimg src={imgtech4} alt="logotech" />
        </ImgWrapper>
        <ButtonWrapper>
          <EnlaceCards target="blank" href={repository}>
            Repository
          </EnlaceCards>
          <EnlaceCards target="blank" href={url}>
            Website
          </EnlaceCards>
        </ButtonWrapper>
      </CardWrapper>
    </CardProjects>
  );
}
const CardProjects = styled(motion.div)`
  width: 350px;
  border: solid 2px white;
  border-radius: 10px;
  background: rgba(0, 0, 0, 0.4);
`;
const ButtonWrapper = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;
const EnlaceCards = styled.a`
  font-size: 0.9rem;
  text-decoration: none;
  color: black;
  width: 120px;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  background-color: var(--terciario);
  border-radius: 10px;
  :hover {
    background-color: var(--secundario);
    transition: 1s;
    color: white;
    cursor: pointer;
  }
`;
const Enlace = styled.a`
  filter: grayscale(1);
  transition: 1s;
  margin-bottom: 1rem;
  :hover {
    filter: none;
    transform: scale(110%);
  }
`;
export const ImgWrapper = styled.div`
  display: flex;
  justify-content: center;
  width: 60%;
  align-items: center;
`;
export const P = styled.p`
  width: 85%;
  text-align: center;
  letter-spacing: -0.02em;
`;
export const CardWrapper = styled.div`
  width: 100%;
  margin: 1rem 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-direction: column;
`;
const Techimg = styled.img`
  width: 30px;
  height: 30px;
  margin: 1rem auto;
  object-fit: cover;
`;
const ProjectImg = styled.img`
  width: 300px;
  height: 200px;
  background-size: cover;
  background-repeat: no-repeat;
  object-fit: cover;
  border-radius: 10px;
`;

export default Card;
