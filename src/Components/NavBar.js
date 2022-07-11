import React from 'react'; 
import logoSmall from '../images/react-icon-small.png'

function NavBar() {
    return (
      <nav>
        <img src={logoSmall} alt="React-logo-small" className="nav--logo"/>
        <h2 className="nav--title">ReactFacts</h2>
        <h3 className="nav--heading">React Course - Project 1</h3>
      </nav>
    )
  }

  export default NavBar