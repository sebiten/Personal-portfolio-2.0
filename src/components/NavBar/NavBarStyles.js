import styled from "styled-components";

export const ContainerNav = styled.div`
  position: fixed;
  left: 50%;
  top: 95%;
  transform: translate(-50%, -50%);
  width: 420px;
  height: 60px;
  background: rgba(0, 0, 0, .7);
  border-radius: 10px;
  border: 2px solid var(--white);
  padding: .5rem 1rem;
  @media (min-width: 600px) {
    width: 500px;
    height: 60px;
  }
`;
export const Nav = styled.nav`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
export const Enlace = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 900;
    font-size: 1.1rem;
    background-image: linear-gradient(
    to right,
    rgb(239, 160, 5) 50%,
    #304f3c 100%);
    background-size: 200% 100%;
  background-position: -100%;
  display: inline-block;
  padding: 5px 0;
  position: relative;
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  transition: all 0.3s ease-in-out;
  :before{
  content: '';
  background: rgb(239, 160, 5);
  display: block;
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 0;
  height: 3px;
  transition: all 0.3s ease-in-out;
}
:hover {
 background-position: 0;
}
:hover::before{
  width: 100%;
}

`;
