import styled from "styled-components";



export const Logo = styled.img`
  width: 400px;
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
  left: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.5);
`;
export const P = styled.p`
  background: transparent;
  font-weight: 500;
  text-align: center;
  font-size: 1.5rem;
  color: white;
  margin-top:1rem;
`;
export const Container = styled.div`
  position: relative;
  text-align: center;
  height: 100vh;

`;
export const Centered = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
`;

export const Maquina = styled.div`
  display: block;
  margin-top: 1rem;
  color: white;
  font-weight: 500;
  text-align: center;
  letter-spacing: 1px;
  white-space: nowrap;
  border-right: 4px solid;
  width: 24ch;
  font-size: 1.5rem;
  animation-delay: 3s;
  animation: typing 5s steps(25), blink 0.5s infinite step-end alternate;
  overflow: hidden;
  @media (min-width: 768px) {
    font-size: 2rem;
    text-align: center;
    margin: 0 auto;
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
export const SocialIcons = styled.div`
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
