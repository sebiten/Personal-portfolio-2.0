import styled from 'styled-components'
import { motion } from "framer-motion";


export const GridProjects = styled.div`
    display:grid;
    height: 100%;
    margin-top: -4rem;
    @media (min-width: 768px) {
        grid-template-columns: repeat(4, 1fr);
        align-items: center;
        place-items: center;
        
    }
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

`
export const ProjectsSection = styled(motion.section)`
    padding-top: 5rem;
    background-color: rgb(43, 17, 35, 0.4);
`