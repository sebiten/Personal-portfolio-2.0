import { motion } from "framer-motion";
import styled from "styled-components";

export const GridSocial = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  @media (min-width: 768px) {
  grid-template-columns: repeat(4, 1fr);
  width: 100%;
      
  }
`;
export const ContactTitle = styled.h2`
  font-size: 2rem;
  text-align: center;
  font-weight: 500;
padding: 3rem 0 2rem 0;
background: rgb(42, 17, 35);

`
export const SectionContact = styled.div`
margin: 0;
  background-color: rgb(43, 17, 35, 0.4);
  width: 100%;
`
export const SocialCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
    filter: grayscale(0);
    background-color: ${(props) =>
    props.CardBg === "Linkedin"
    ? "#0e76a8"
    : "none" && props.CardBg === "Gmail"
    ? "#EA4335"
    : "none" && props.CardBg === "Github"
    ? "#45484a"
    : "none" && props.CardBg === "Twitter"
    ? "#00acee"
    : "none"};
    :hover {
      transition: 1s;
      transform: scale(90%);

    }
`;
