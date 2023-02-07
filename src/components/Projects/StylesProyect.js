import styled from 'styled-components'
import { motion } from "framer-motion";


export const GridProjects = styled(motion.div)`
    display:grid;
    height: 100%;
    width: 100%;
    margin-top: -4rem;
    grid-template-columns: repeat(1, 1fr);
    @media (min-width: 768px) {
        grid-template-columns: repeat(2, 2fr);
        
    }
    @media (min-width: 1441px) {
        grid-template-columns: repeat(4, 1fr)
        
    }
    place-items: center;
    align-items: center;
    place-content:center;
    padding: 10rem;
`
export const TechLogoDesc = styled.img`
    width: 30px;    
    height: 30px;    
`
export const H2 = styled.h2`
    text-align: center;
    font-size: 2rem;
     font-weight: 500;
     margin-top: 1.5rem;

`
export const ProjectsSection = styled.section`
    padding-top: 5rem;
    background: rgb(42, 17, 35);


`