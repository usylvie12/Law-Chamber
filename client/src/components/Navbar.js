import React from 'react'
import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light ">
  <div className="container">
    <Link className="navbar-brand" to="#"><img src="/assets/logo.jpg" className='logo' alt="ligo" /></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
          <Link className="nav-link active" aria-current="page" to="/">Home</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/about">About</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/practice">Practice Areas</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/attorneys">Attorneys</Link>
        </li>
        <li className="nav-item">
          <Link className="nav-link" to="/request">Contact</Link>
        </li>
        
        
          </ul>
          </div>
         
    
  </div>
  <ul className="navbar-nav me-auto ">
       
  
        <li className="nav-item">
          <Link className="nav-link-register rounded-pill" to="/Register"> Get Started</Link>


        </li>
        </ul>
</nav>

    </div>
  )
}

export default Navbar