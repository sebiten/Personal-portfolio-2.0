import { motion } from "framer-motion";
import styled from "styled-components";

export const Logo = styled.img`
  background: transparent;
  animation: floating 2s ease-in-out infinite;
  overflow: hidden;
  width: 300px;
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

export const P = styled.p`
  background: transparent;
  color: white;
  font-size: 1.5rem;
  font-weight: 500;
  margin-top: 1rem;
  text-align: center;
`;

export const Maquina = styled.span`
  font-size: 1.8rem;
`;

export const Container = styled.div`
  height: 100vh;
  position: relative;
  text-align: center;
  --c1: #3b1123;
  --c2: #000;
  --c3: var(--amarillo);
  background: var(--c1);
`;

export const Bg = styled.div`
  height: 100%;
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  @media (min-width: 768px) {
    top: 50%;
  }
  background: rgba(0, 0, 0, 0.5);
`;

export const Centered = styled.div`
  left: 50%;
  position: absolute;
  top: 50%;
  transform: translate(-50%, -50%);
`;

export const SocialIcons = styled(motion.div)`
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1rem;
`;

export const A = styled.a`
  color: white;
  margin-bottom: 2rem;
  text-decoration: none;
  &:hover {
    transform: scale(110%);
  }
`;
