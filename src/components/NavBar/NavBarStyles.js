import styled from "styled-components";

export const ContainerNav = styled.div`
  position: absolute;
  top: 87%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: transparent;
  width: 400px;
  background: rgba(0, 0, 0, .7);
  color: white;
  padding: 1rem 2rem;
  border-radius: 10px;
  border: 2px solid var(--white);
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1.5rem;
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
