import React from 'react'
import { useContext } from 'react';
import { AuthContext } from "../context/authContext.js"
import  { Link } from 'react-router-dom';
import Logo from "../img/BlogLogo.png";

const Navbar = () => {

  const { currentUser,logout } = useContext(AuthContext)
  return (
    <div className='navbar'>
      <div className="container">
        <div className="logo">
         <Link to={"/"}>
         <img src={Logo} alt="Classics Corner Logo" className='logo-img' />
         </Link>
        </div>
        <div className="links">
          <Link className='link' to={`/?cat=poems`}>
            <h6>POEMS</h6>
          </Link>
          <Link className='link' to={`/?cat=books`}>
            <h6>BOOKS</h6>
          </Link>
          <Link className='link' to={`/?cat=history`}>
            <h6>HISTORY</h6>
          </Link>
          <Link className='link' to={`/?cat=media`}>
            <h6>MEDIA</h6>
          </Link>
          <Link className='link' to={`/?cat=other`}>
            <h6>OTHER</h6>
          </Link>
          {/*<Link className='link' to={`/?cat=map`}>
            <h6>MAP</h6>
          </Link>*/}
          <Link className='link' to={`/about`}>
            <h6>ABOUT ME</h6>
          </Link>
          <Link className='link' to={`/contact`}>
            <h6>CONTACT</h6>
          </Link>
          {/*<Link className='link' to={`/?cat=login`}>
            <h6>LOGIN</h6>
          </Link>*/}
          <span>{currentUser?.username}</span>
          {currentUser ? ( <span onClick={logout}>Logout</span> ) : ( <Link className='link' to="/login">Login</Link>)}
          {currentUser?.username == "Nate" && <span className='write'>
            <Link className='link' to={`/write`}>Write</Link>
          </span>}
        </div>
      </div>
    </div>
  )
}

export default Navbar