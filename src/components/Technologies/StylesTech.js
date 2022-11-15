import styled from "styled-components";

export const SectionTech = styled.section`
  background: rgb(48 79 60 / 0.9);
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding: 10rem;
`;
export const Title = styled.h3`
  margin: 3rem;
  text-align: center;
  margin: 0 auto;
  font-size: 2rem;
  font-weight: 500;
  margin-bottom: 4rem;

`;
export const TitleTech = styled.h3`
  margin: 3rem;
  text-align: center;
  margin: 0 auto;
  font-size: 1rem;
  text-transform: uppercase;
`;
export const ImgTechContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  place-content: center;
    place-items: center;
    align-items: center;
    gap: 4rem;
  @media (min-width: 768px) {
    grid-template-columns: repeat(4, 2fr);
    place-content: center;
    place-items: center;
    align-items: center;
    gap: 3rem;
  }
  @media (min-width: ) {
      
  }
`;
export const TechInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  justify-content: center;
  align-items: center;
`
export const Img = styled.img`
  width: 160px;
  height: 140px;
  
`;
