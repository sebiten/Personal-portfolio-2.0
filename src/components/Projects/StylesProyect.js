import styled from 'styled-components'

export const GridProjects = styled.div`
    display:grid;
    background-color: var(--primario);
    height: 100%;
    @media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
        align-items: center;
        place-items: center;
        
    }
    padding: 10rem;
`
export const ImgProjects = styled.img`
    width: 180px;
    height: 120px;
`