import { Link } from 'react-router-dom'
import '../styles/components/card-recipe.scss'

const CardRecipe = ({ recipe }) => {
  const { id, name, img } = recipe

  return (
    <div className='card-recipe'>
      <img src={img} alt={name} />
      <div className='description'>
        <h4>{name}</h4>
        <Link to={`recipe/${id}`} className="read-more">Read more</Link>
      </div>
    </div>
  )
}

export default CardRecipe
