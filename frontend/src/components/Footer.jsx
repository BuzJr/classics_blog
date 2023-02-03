import React from 'react';
import Logo from '..//img/BlogLogo.png';

const Footer = () => {
  return (
    <footer>
      <img src={Logo} alt=""/>
      <span>powered by <b>React.js</b>.</span>
    </footer>
  )
}

export default Footer