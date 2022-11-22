import { motion } from "framer-motion";
import styled from "styled-components";
import { Img } from "./StylesTech";

function CardTech({ imgtech, description, name }) {
  return (
    <Container>
      <Img src={imgtech} alt="" />
      <TechName>
        <Span>{name}</Span>
      </TechName>
      <p>{description}</p>
    </Container>
  );
}
const Span = styled.span`
  width: 100%;
  height: 50px;
  background: rgba(249, 249, 249, 0.2);
  border-radius: 10px;
  padding: 0.2rem 2rem;
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
`;
const TechName = styled.h2`
  text-transform: uppercase;
  margin: 1.5rem;
  font-size: 19px;
`;

export default CardTech;
