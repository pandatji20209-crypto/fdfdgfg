import React from 'react'
import { Link } from 'react-router-dom'


const Navbar = () => {
  return (
    <div className='container'>
        <header>
            <h1 data-aos = "fade-down" data-aos-duration="1500" class="logo">YASH</h1>

            <nav data-aos = "fade-down" data-aos-duration="1500">
               <Link to="/">Home</Link>
               <Link to="/about">About Me</Link>
               <Link to="/resources">Resources</Link>
               <Link to="/docs ">Docs</Link>
            </nav>
            
            <Link to="/hire"><button data-aos = "fade-down" data-aos-duration="1500" class="btn-signin">HIRE ME</button></Link>
        </header>
    </div>
  )
}

export default Navbar
