import styled from 'styled-components'


export const Button = styled.button`
  border-radius: 10px;
  background: none;
  border: 2px solid var(--white);
  font: inherit;
  line-height: 1;
  margin: 0.5em;
  padding: 1em 2em;
  :hover,
  :focus {
    box-shadow: inset 0 0 0 2em var(--verde);
    transform: scale(110%);
    transition-duration: 0.8s;
    cursor: pointer;
  }
`;