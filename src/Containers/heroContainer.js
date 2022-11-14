import styled from "styled-components";

export const ContainerHero = styled.div`
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
