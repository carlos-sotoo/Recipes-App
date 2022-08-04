import InputSearch from './InputSearch'
import logo from '../assets/icon.png'
import '../styles/components/header.scss'
import { Link } from 'react-router-dom'
import { BiCategoryAlt, BiWorld } from 'react-icons/bi'

const Header = () => {
  const handleSearch = (value) => {
    console.log(value)
  }

  return (
    <header className='header'>
      <Link to="/" className='logo'>
        <img src={logo} alt="logo" />
        <span>Recipes <strong>App</strong></span>
      </Link>
      <nav>
        <InputSearch text="Search recipe" handleSearch={handleSearch} />
        <Link to="/category" className='link'><BiCategoryAlt className='icon' />Categories</Link>
        <Link to="/country" className='link'><BiWorld className='icon' />Countries</Link>
      </nav>
    </header>
  )
}

export default Header
