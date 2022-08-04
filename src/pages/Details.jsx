import { GiCookingPot } from 'react-icons/gi'
import { Link, useParams } from 'react-router-dom'
import Spinner from '../components/Spinner'
import { useLocalStorage } from '../hooks/useLocalStorage'
import useRecipe from '../hooks/useRecipe'

import '../styles/pages/details.scss'

const Details = () => {
  const { id } = useParams()
  const [loading, recipe] = useRecipe(id)
  const { setValue } = useLocalStorage('lastRecipes', [])

  if (loading) return <Spinner />

  setValue({
    id: recipe.id,
    name: recipe.name,
    img: recipe.img,
    country: recipe.country,
    category: recipe.category
  })

  return (
    <div className='details'>
      <h2>{recipe.name}</h2>
      <img src={recipe.img} alt={recipe.name} />
      <div className='tags'>
        <Link to={`/country/${recipe.country.toLowerCase()}`} className="main-tag">{recipe.country} Food</Link>
        <Link to={`/category/${recipe.category.toLowerCase()}`} className="main-tag">{recipe.category}</Link>
      </div>
      <div className="content">

        <div>
          <h3>Ingredients:</h3>
          <ul className="ingredients">
            {recipe.ingredients.map(ing => <li key={ing.ingredient}><GiCookingPot /> {ing.ingredient} <span>{ing.quantity}</span></li>)}
          </ul>
        </div>
      </div>

      <div className='instructions'>
        <h3>Instructions:</h3>
        <p>{recipe.instructions}</p>
      </div>

      {recipe.video
        ? <div className='video'>
          <iframe
            src={recipe.video}
            title={recipe.name}
            width="100%"
            height="100%"
            frameBorder="0"
            allow="autoplay;encrypted-media;"
            allowFullScreen
          ></iframe>
        </div>
        : null
      }
    </div>
  )
}

export default Details
