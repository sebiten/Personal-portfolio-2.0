import React from 'react'
import { Nav, Enlace, ContainerNav } from './NavBarStyles'

function NavBar() {
  return (
    <ContainerNav>
        <Nav>
            <Enlace href="">Home</Enlace>
            <Enlace href="">About me</Enlace>
            <Enlace href="">Projects</Enlace>
            <Enlace href="">Contact</Enlace>
        </Nav>
    </ContainerNav>
  )
}

export default NavBar