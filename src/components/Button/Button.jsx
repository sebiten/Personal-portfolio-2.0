import styled from 'styled-components'
export default function Button() {
  return (
    <Button></Button>
  )
}

export const ButtonStyle = styled.button`
  width: 200px;
  color: white;
  border-radius: 10px;
  background: none;
  border: 2px solid var(--white);
  font: inherit;
  font-weight: 700;
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