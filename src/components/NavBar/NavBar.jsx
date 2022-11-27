import React from "react";
import { Nav, Enlace, ContainerNav } from "./NavBarStyles";
import { FiHome, FiUser, FiPhone, FiPaperclip } from "react-icons/fi";

function NavBar() {
  return (
    <ContainerNav
      initial={{ x: -700, opacity: 0, scale: 1 }}
      animate={{ x: -280, opacity: 1, scale: 1 }}
      transition={{ duration: 2.2 }}
    >
      <Nav>
        <FiHome size={30} style={{ color: "#946e26" }} />
        <Enlace href="#home">Home</Enlace>
        <FiUser size={30} style={{ color: "#946e26" }} />
        <Enlace href="#about">About</Enlace>
        <FiPaperclip size={30} style={{ color: "#946e26" }} />
        <Enlace href="#projects">Projects</Enlace>
        <FiPhone size={30} style={{ color: "#946e26" }} />
        <Enlace href="#contact">Contact</Enlace>
      </Nav>
    </ContainerNav>
  );
}

export default NavBar;
