import styled from "styled-components";

export const ContainerNav = styled.div`
position: sticky;
  margin-top: 22rem;
  max-width: 500px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  color: white;
  padding: 1rem;
  border-radius: 10px;
  background: none;
  border: 2px solid var(--white);
`;
export const Nav = styled.nav`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
`;
export const Enlace = styled.a`
    text-decoration: none;
    text-transform: uppercase;
    font-weight: 700;
    background-image: linear-gradient(
    to right,
    #54b3d6,
    #54b3d6 50%,
    #fff 50%);
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
  background: #54b3d6;
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
