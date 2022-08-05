import { useRef, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import { BiCategoryAlt, BiWorld, BiHomeAlt } from 'react-icons/bi'
import InputSearch from './InputSearch'
import BurguerButton from './BurguerButton'
import DetailsNavBar from './DetailsNavBar'

import '../styles/components/nav-bar.scss'

const countries = ['American', 'British', 'Canadian', 'Chinese', 'Croatian', 'Dutch', 'Egyptian', 'French', 'Greek', 'Indian', 'Irish', 'Italian', 'Jamaican', 'Japanese', 'Kenyan', 'Malaysian', 'Mexican', 'Moroccan', 'Polish', 'Portuguese', 'Russian', 'Spanish', 'Thai', 'Tunisian', 'Turkish', 'Unknown', 'Vietnamese']
const categories = ['Beef', 'Breakfast', 'Chicken', 'Dessert', 'Goat', 'Lamb', 'Miscellaneous', 'Pasta', 'Pork', 'Seafood', 'Side', 'Starter', 'Vegan', 'Vegetarian']

const NavBar = () => {
  const navigate = useNavigate()
  const [clicked, setClicked] = useState(false)
  const refNav = useRef(null)

  const handleSearch = (value) => {
    if (value.length > 0) { navigate(`/recipes/${value}`) }
    setClicked(false)
  }

  const handleSearchIngredient = (value) => {
    if (value.length > 0) { navigate(`/ingredient/${value}`) }
    setClicked(false)
  }

  const handleClick = (e) => {
    setClicked(prev => !prev)
  }

  document.addEventListener('click', (event) => {
    if (refNav.current && !refNav.current.contains(event.target)) setClicked(false)
  })

  return (
    <div ref={refNav}>
      <BurguerButton clicked={clicked} handleClick={handleClick} />
      <nav className={`nav-bar ${clicked && 'active'}`} >
        <InputSearch text="Search recipe" handleSearch={handleSearch} />
        <Link to='/' className='link-nav' onClick={handleClick}><BiHomeAlt /> <span>Home</span></Link>
        <DetailsNavBar
          icon={<BiCategoryAlt />}
          name='categories'
          path='category'
          handleClick={handleClick}
          navbar={clicked}
        >
          {categories.map(category =>
            <Link
              className='link-details'
              key={category}
              to={`/category/${category}`}
              onClick={handleClick}
            >{category}</Link>)}
        </DetailsNavBar>
        <DetailsNavBar
          icon={<BiWorld />}
          name='countries'
          path='country'
          handleClick={handleClick}
          navbar={clicked}>
          {countries.map(country =>
            <Link
              className='link-details'
              key={country}
              to={`/country/${country}`}
              onClick={handleClick}
            >{country}</Link>)}
        </DetailsNavBar>
        <InputSearch text="Search by ingredient" handleSearch={handleSearchIngredient} />
      </nav>
    </div>
  )
}

export default NavBar
