import styled from 'styled-components'

export const GridProjects = styled.div`
    display:grid;
    background-color: var(--secundario);
    height: 100%;
    margin-top: -4rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
        align-items: center;
        place-items: center;
        
    }
    padding: 10rem;
`
export const TitleProjects = styled.h2`
    text-align: center;
    background-color: var(--secundario);
    padding: 2rem;
    padding-top: 10rem;
`
