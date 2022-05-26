import React from 'react'
import { Link } from 'react-router-dom'
const Navbar = () => {
  return (
      <nav className='navbar shadow fixed-top navbar-expand-sm navbar-dark bg-black'>
          <div className='container'>
              <Link to="/" className='navbar-brand'>Contact Book</Link>
             
              <div>
                  <Link to="/contacts/add" className='btn btn-light ml-auto '>Create Contact</Link>
                  
                  {/* <Link href="#" className='btn btn-danger ml-auto'>Logout</Link> */}
              
              </div>
              
          </div>
      </nav>
  )
}

export default Navbar