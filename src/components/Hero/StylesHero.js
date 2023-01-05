import { motion } from "framer-motion";
import styled from "styled-components";



export const Logo = styled.img`
  width: 300px;
  background: transparent;
  animation-name: floating;
  animation-duration: 2s;
  animation-iteration-count: infinite;
  animation-timing-function: ease-in-out;
  overflow: hidden;
  @keyframes floating {
    0% {
      transform: translate(0, 0px);
    }
    50% {
      transform: translate(0px, -15px);
    }
    100% {
      transform: translate(0, 0px);
    }
  }
`;
export const Bg = styled.div`
  position: absolute;
  top: 50%;
  @media (min-width: 768px) {
  top: 50%;
      
  }
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
  position: relative;

`
export const P = styled.p`
  background: transparent;
  font-weight: 500;
  text-align: center;
  font-size: 1.5rem;
  color: white;
  margin-top:1rem;
`;
export const Maquina = styled.span`
  font-size: 1.8rem;
`
export const Container = styled.div`
  position: relative;
  text-align: center;
  height: 100vh;
  position: relative;
    --s: 100px; 
  --c1: #2b1123;
  --c2: #000;
  --c3: var(--amarillo);
  
  --_s: calc(2*var(--s)) calc(2*var(--s));
  background:
    calc( .7*var(--s)),
    conic-gradient(from 90deg at 20% 20%,var(--c2) 50%,var(--c1) 0) 
     0 0/var(--s) var(--s);
`;
export const Centered = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  
`;

export const SocialIcons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
`;
export const A = styled.a`
  text-decoration: none;
  color: white;
  margin-bottom: 2rem;
  &:hover {
    transform: scale(110%);
  }
`;
