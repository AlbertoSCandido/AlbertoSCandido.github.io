import React from 'react'

const Navbar = () => {
  return (
    <nav className="d-flex j-c-end p-1">
      <ul className="d-flex gap-1 unstyled-list">
        <li><a href="#">Home</a></li>
        <li><a href="#">Projetos</a></li>
        <li><a href="#contato">Contato</a></li>
      </ul> 
    </nav>
  )
}

export default Navbar;
