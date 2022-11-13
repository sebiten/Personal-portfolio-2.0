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
  background: rgba(0, 0, 0, 0.5);
`;
export const P = styled.p`
  background: transparent;
  font-weight: 500;
  text-align: center;
  font-size: 1.5rem;
  color: white;
`;
export const Container = styled.div`
  position: relative;
  text-align: center;
  height: 100vh;
  --s: 100px; /* control the size */
  --c1: #304f3c;
  --c2: #000;
  
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
    calc( .7*var(--s)) calc( .7*var(--s)),
    calc(-.3*var(--s)) calc(-.3*var(--s)),0 0
  }
  25% {
   background-position: 
   calc(1.9*var(--s)) calc( .9*var(--s)),
    calc(-1.1*var(--s)) calc(-.1*var(--s)),
    calc(1.7*var(--s)) calc( .7*var(--s)),
    calc(-1.3*var(--s)) calc(-.3*var(--s)),0 0
  }
  50% {
   background-position: 
   calc(1.9*var(--s)) calc(-.1*var(--s)),
    calc(-1.1*var(--s)) calc( .9*var(--s)),
    calc(1.7*var(--s)) calc(-.3*var(--s)),
    calc(-1.3*var(--s)) calc( .7*var(--s)),0 0
  }
  75% {
   background-position: 
   calc(2.9*var(--s)) calc(-.1*var(--s)),
    calc(-2.1*var(--s)) calc( .9*var(--s)),
    calc(2.7*var(--s)) calc(-.3*var(--s)),
    calc(-2.3*var(--s)) calc( .7*var(--s)),0 0
  }
 
  100% {
   background-position: 
   calc(2.9*var(--s)) calc(-1.1*var(--s)),
    calc(-2.1*var(--s)) calc(1.9*var(--s)),
    calc(2.7*var(--s)) calc(-1.3*var(--s)),
    calc(-2.3*var(--s)) calc(1.7*var(--s)),0 0
  }
}
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
  font-weight: 600;
  letter-spacing: 1px;
  white-space: nowrap;
  border-right: 4px solid;
  width: 22ch;
  font-size: 1.5rem;
  animation-delay: 3s;
  animation: typing 5s steps(25),  infinite step-end alternate;
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
    transform: scale(110%);
  }
`;
