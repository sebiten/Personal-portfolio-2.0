import styled from "styled-components";

export const GridSocial = styled.section`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
`;

export const SocialCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 300px;
  background-color: ${(props) =>
    props.CardBg === "Linkedin"
      ? "blue"
      : "none" && props.CardBg === "Gmail"
      ? "red"
      : "none" && props.CardBg === "Github"
      ? "purple"
      : "none" && props.CardBg === "Twitter"
      ? "white"
      : "none"};
`;
