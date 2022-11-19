import { motion } from "framer-motion";
import styled from "styled-components";

export const Main = styled.main`
  position: relative;
  height: 100%;
  padding: 10rem;
  position: relative;
  background: rgb(43, 17, 35, 0.4);
`;
export const BgContainer = styled(motion.div)`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  padding: 5rem;
  border-radius: 222px;

  background: rgba(0, 0, 0, 0.2);
`;
export const BgContainer2 = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-30%, -50%);
  width: 700px;
  padding: 5rem;
  border-radius: 40%;

  background: rgba(0, 0, 0, 0.2);
`;
export const AboutGrid = styled.div`
  display: grid;
  place-content: center;
  place-items: center;
  width: 90%;
  align-items: center;
  margin: 10rem auto;
  background-color: transparent;
  @media (min-width: 975px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    margin: 0 0;
    transform: none;
    width: 100%;
  }
`;
export const P = styled(motion.p)`
  text-align: justify;
  margin-top: 1rem;
  width: auto;
`;
export const FromSpan = styled(motion.span)`
  color: var(--terciario);
`;
export const InfoContainer = styled.div`
  @media (max-width: 1050px) {
    width: 100%;
  }
`;
export const Img = styled(motion.img)`
  width: 300px;
  height: 280px;
  @media (min-width: 768px) {
    width: 420px;
    height: 380px;
  }
  border-radius: 50%;
  border: 3px solid black;
`
export const AboutMeTitle = styled(motion.div)`
  display: block;
  color: white;
  font-weight: 500;
  letter-spacing: 1px;
  white-space: nowrap;
  border-right: 4px solid;
  width: 9ch;
  font-size: 1.5rem;
  animation-delay: 3s;
  text-align: justify;
  animation: typing 5s steps(9),
    blink 0.5s infinite step-start alternate forwards;
  overflow: hidden;
  @media (min-width: 768px) {
    font-size: 2rem;
    text-align: justify;
    margin-top: 1rem;
  }
  @keyframes typing {
    from {
      width: 0;
    }
  }

  @keyframes blink {
    50% {
      border-color: transparent;
    }
  }
`;
export const Dowload = styled(motion.button)`
  letter-spacing: 1px;
  font-weight: 700;
  height: 3em;
  width: 11em;
  margin-top: 1rem;
  background: var(--terciario);
  color: #000;
  font-size: 1.05em;
  border: none;
  border-radius: 5px;
  transition: all 0.5s ease-in-out;
  :hover {
    box-shadow: inset 12em 0 var(--secundario);
    cursor: pointer;
    color: #fff;
    border: none;
  }
`;
