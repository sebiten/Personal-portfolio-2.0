import styled from 'styled-components'
import { Img, TechInfo } from "./StylesTech"


function CardTech({imgtech, description, name}) {
  return (
        <Container>
          <Img src={imgtech} alt="" />
          <TechName>{name}</TechName>
          <Paragraph>{description}</Paragraph>
          <EnlaceB href="">Read more</EnlaceB>
        </Container>
    
  )
}
const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 3rem;
  width: 70%;
`
const TechName = styled.h2`
    text-transform: uppercase;
    margin: 1.5rem;
    font-size: 19px;

`
const Paragraph = styled.p`
  text-align: justify;
  letter-spacing: -0.03em  ;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
  overflow: hidden;
  font-size: 1rem;
`;
const EnlaceB = styled.a`
display: flex;
align-items: center;
justify-content: center;
    font-weight: 700;
    height: 3em;
    width: 200px;
    @media (min-width:768px ) {
        width: 300px;
    }
    margin-top: 1rem;
    background: var(--terciario);
    color: #fff;
    font-size: 1.05em;
    border: none;
    border-radius: 5px;
    transition: all .5s ease-in-out;
    :hover {
    box-shadow: inset 20em 0 var(--secundario);
    cursor: pointer;
    color: #fff;
    }
color: #000;
text-decoration: none;
`;

export default CardTech
