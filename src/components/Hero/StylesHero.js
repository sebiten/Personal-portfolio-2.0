import styled from "styled-components";

export const Img = styled.img`
  width: 100%;
  height: 100vh;
  object-fit: cover;
`;
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
  background: rgba(0, 0, 0, 0.6);
`;
export const P = styled.p`
  background: transparent;
  font-weight: 500;
  text-align: center;
  font-size: 1.5rem;
`;
export const Container = styled.div`
  position: relative;
  text-align: center;
  color: white;
  height: 100vh;
`;
export const Centered = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
`;
export const Div = styled.div`
  height: 100%;
  height: 100%;
`;
export const Maquina = styled.div`
  display: block;
  margin-top:1rem;
  font-weight: 600;
  letter-spacing: 1px;
  white-space: nowrap;
  border-right: 4px solid;
  width: 22ch;
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
`;
export const A = styled.a`
  text-decoration: none;
  color: white;
  margin-bottom: 2rem;
  &:hover {
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
        transform: translate(0px, -9px);
      }
      100% {
        transform: translate(0, 0px);
      }
    }
  }
`;
