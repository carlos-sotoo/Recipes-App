import useRandomRecipe from '../hooks/useRandomRecipe'
import '../styles/components/random-recipe.scss'
import Spinner from './Spinner'
import { Link } from 'react-router-dom'

import { GiCookingPot } from 'react-icons/gi'

const RandomRecipe = () => {
  const [loading, recipe] = useRandomRecipe()

  if (loading) return <Spinner />

  return (
    <div className='random-recipe'>
      <h2>{recipe.name}</h2>
      <img src={recipe.img} alt={recipe.name} />
      <div className="content">
        <div>
          <Link to={`/country/${recipe.country.toLowerCase()}`} className="main-tag">{recipe.country} Food</Link>
          <Link to={`/category/${recipe.category.toLowerCase()}`} className="main-tag">{recipe.category}</Link>
        </div>

        <div>
          <h3>Ingredients:</h3>
          <ul className="ingredients">
            {recipe.ingredients.map(ing => <li key={ing.ingredient}><GiCookingPot /> {ing.ingredient}</li>)}
          </ul>
        </div>
        <Link to={`/recipe/${recipe.id}`} className="read-more">Read more...</Link>

      </div>
    </div>
  )
}

export default RandomRecipe
