import { Link, useLocation } from 'react-router-dom'
import Spinner from '../components/Spinner'
import useListRecipes from '../hooks/useListRecipes'

import '../styles/pages/list.scss'

const List = () => {
  const location = useLocation()
  const param = location.pathname.split('/')[1]

  const [loading, recipes] = useListRecipes(param, 'list')

  if (loading) return <Spinner />
  return (
    <div className='list'>
      {recipes.map(recipe => <Link to={`${recipe.name}`} className="recipe" key={recipe.name}>{recipe.name}</Link>)}
    </div>
  )
}

export default List
