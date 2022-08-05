
import logo from '../assets/icon.png'
import '../styles/components/header.scss'
import { Link } from 'react-router-dom'

import NavBar from './NavBar'

const Header = () => {
  return (
    <header className='header'>
      <NavBar />
      <Link to="/" className='logo'>
        <img src={logo} alt="logo" />
        <span>Recipes <strong>App</strong></span>
      </Link>
    </header>
  )
}

export default Header
