import styled from 'styled-components'

export const Main = styled.main`    
    background: rgba(0 0 0 / 0.97);
    margin: 0 auto;
    padding: 10rem;
    
`
export const AboutGrid = styled.div`
    display: grid;
    place-content: center;
    place-items: center;
    width: 90%;
    align-items: center;
    margin: 0 auto;
    background-color: transparent;
    @media (min-width: 975px) {
        display: grid;
        grid-template-columns: repeat(2 , 1fr);
        margin: 0 auto;
        transform: none;
        width: 80%;
    }
    
    
`
export const P = styled.p`
    letter-spacing: .1em;
    text-align: justify;
    width: auto;
`
export const ImgContainer = styled.div`
    
    
`
export const InfoContainer = styled.div`
    @media (max-width: 1050px) {
        width: 100%;
    }

`
export const Img = styled.img`
    width: 400px;
    height: 380px;
    border-radius: 50%;
    border: 11px ridge #304f3c;
`
export const AboutMeTitle = styled.div`
display: block;
  color: white;
  font-weight: 500;
  letter-spacing: 1px;
  white-space: nowrap;
  border-right: 4px solid;
  width: 10ch;
  font-size: 1.5rem;
  margin: 0 auto;
  animation-delay: 3s;
  text-align: justify;
  animation: typing 5s steps(9), blink 0.5s infinite step-start alternate;
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

`
export const Dowload = styled.button`
    letter-spacing: 1px;
    font-weight: 700;
    height: 3em;
    width: 11em;
    margin-top: 1rem;
    background: var(--verde);
    color: rgb(255, 255, 255);
    font-size: 1.05em;
    border: none;
    border-radius: 5px;
    transition: all 0.3s ease-out;
    :hover {
    box-shadow: inset 12em 0 var(--amarillo);
    cursor: pointer;
    color: rgb(0, 0, 0);
    }
`