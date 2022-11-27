import { motion } from "framer-motion";
import styled from "styled-components";

export const SectionTech = styled(motion.section)`
  background-color: black;
  width: 100%;
  position: relative;
  padding-bottom: 8rem;

`;
export const Title = styled(motion.h2)`
  color: white;
  text-align: center;
  font-size: 2rem;
  font-weight: 500;
  padding: 5rem;
  @media (min-width: 768px) {
       padding: 6rem;
      font-size: 2.5rem;

   }

`

export const TitleTech = styled.div`
  display: flex;  
  align-items:center;
  justify-content: center;
 
`;

export const ImgTechContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  place-content: center;
  place-items: center;
  background-color: black;
  @media (min-width: 550px) {
    grid-template-columns: repeat(2, 2fr);
 
  }
  @media (min-width: 900px ) {
    grid-template-columns: repeat(3, 2fr);
  
  
  }
  @media (min-width: 1200px ) {
    grid-template-columns: repeat(3, 3fr);
  }
  width: 50%;
  margin: 0 auto;

`;
export const TechInfo = styled.div`
  padding: 1rem;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 90%;
`;
export const Img = styled.img`
  width: 120px;
  height: 105px;
`;
