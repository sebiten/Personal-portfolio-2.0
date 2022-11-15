import React from 'react'
import { Nav, Enlace, ContainerNav } from './NavBarStyles'
import { FiHome, FiUser, FiPhone, FiPaperclip} from 'react-icons/fi'
import {IoIosPaper} from 'react-icons/io'

function NavBar() {
  return (
    <ContainerNav>
        <Nav>
         <FiHome size={30} style={{color:'#efa005'}}/>
            <Enlace href="">Home</Enlace>
            <FiUser size={30} style={{color:'#efa005'}}/>
            <Enlace href="">About</Enlace>
            <FiPaperclip size={30} style={{color:'#efa005'}}/>
            <Enlace href="">Projects</Enlace>
            <FiPhone size={30} style={{color:'#efa005'}}/>
            <Enlace href="">Contact</Enlace>
        </Nav>
    </ContainerNav>
  )
}

export default NavBar