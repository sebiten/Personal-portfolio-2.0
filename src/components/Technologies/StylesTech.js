import styled from "styled-components";

export const SectionTech = styled.section`
  height: 100vh;
  width: 100%;
  position: absolute;
  background-color: var(--secundario);
`;
export const Wrapper = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 90%;
`;
export const SpanTechTitle = styled.span`
  color: var(--terciario);

`
export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  flex-shrink: unset;
  z-index: 10;
`;

export const TitleTech = styled.h3`
  text-align: center;
  font-size: 2rem;
  margin: 0 auto;
  text-transform: uppercase;
  background-color: black;
  padding: 2rem 2rem;
  

`;

export const ImgTechContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  place-content: center;
  place-items: center;
  background: rgba(0, 0, 0, 0.9);
  padding: 2rem;
  @media (min-width: 550px) {
    grid-template-columns: repeat(2, 2fr);
 
  }
  @media (min-width: 900px ) {
    grid-template-columns: repeat(3, 2fr);
  
  
  }
  @media (min-width: 1200px ) {
    grid-template-columns: repeat(4, 2fr);
    
  }
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
  width: 160px;
  height: 140px;
`;
