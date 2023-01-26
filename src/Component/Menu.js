import React from 'react'
import {  NavLink } from 'react-router-dom';



function Menu() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
  <NavLink className="navbar-brand" to={"#"}>Prestious-Task</NavLink> 
  <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
    <span className="navbar-toggler-icon"></span>
  </button>
  <div className="collapse navbar-collapse" id="navbarNav">
    <ul className="navbar-nav">
      <li className="nav-item active">
        <NavLink className="nav-link" to={"/home"}>Home </NavLink> 
      </li>
      
      <li className="nav-item">
        <NavLink className="nav-link" to={"about"}>About</NavLink> 
      </li>

      <li className="nav-item ">
        <NavLink className="nav-link" to={"headTail"}>Head-Tail</NavLink> 
      </li>
    </ul>
  </div>
</nav>
    </div>
  )
}

export default Menu