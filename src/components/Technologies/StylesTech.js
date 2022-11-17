import { motion } from "framer-motion";
import styled from "styled-components";

export const SectionTech = styled(motion.section)`
  width: 100%;
  position: relative;
  padding: 0rem;
   @media (min-width: 768px) {
       padding: 10rem;
   }
  --s: 100px; 
  --c1: #2b1123;
  --c2: #000;
  --c3: var(--amarillo);
  
  --_s: calc(2*var(--s)) calc(2*var(--s));
  background:
    calc( .7*var(--s)),
    conic-gradient(from 90deg at 20% 20%,var(--c2) 50%,var(--c1) 0) 
     0 0/var(--s) var(--s);
     
  animation: m 10s infinite;


@keyframes m {
  0% {
   background-position: 
   calc( .9*var(--s)) calc( .9*var(--s)),
    calc(-.1*var(--s)) calc(-.1*var(--s)),
    calc(-.3*var(--s)) calc(-.3*var(--s)),0 0
  }
  25% {
   background-position: 
   calc(1.9*var(--s)) calc( .9*var(--s)),
    calc(-1.1*var(--s)) calc(-.1*var(--s)),
    calc(-1.3*var(--s)) calc(-.3*var(--s)),0 0
  }
  50% {
   background-position: 
   calc(1.9*var(--s)) calc(-.1*var(--s)),
    calc(-1.1*var(--s)) calc( .9*var(--s)),
    calc(-1.3*var(--s)) calc( .7*var(--s)),0 0
  }
  75% {
   background-position: 
   calc(2.9*var(--s)) calc(-.1*var(--s)),
    calc(-2.1*var(--s)) calc( .9*var(--s)),
    calc(-2.3*var(--s)) calc( .7*var(--s)),0 0
  }
 
  100% {
   background-position: 
   calc(2.9*var(--s)) calc(-1.1*var(--s)),
    calc(-2.1*var(--s)) calc(1.9*var(--s)),
    calc(-2.3*var(--s)) calc(1.7*var(--s)),0 0
  }
} 

`;
export const Wrapper = styled.div`
  margin: 0 auto;
  height: 100%;
  width: 90%;

`;
export const Title = styled.h2`
  color: var(--terciario);
  text-align: center;
  font-size: 2rem;

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
  width: 100%;

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
  width: 170px;
  height: 135px;
`;
