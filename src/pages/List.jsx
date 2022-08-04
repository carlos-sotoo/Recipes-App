import { Link, useLocation } from 'react-router-dom'
import Spinner from '../components/Spinner'
import useListRecipes from '../hooks/useListRecipes'

const List = () => {
  const location = useLocation()
  const param = location.pathname.split('/')[1]

  const [loading, recipes] = useListRecipes(param, 'list')

  if (loading) return <Spinner />
  return (
    <div className='list'>
      {recipes.map(recipe => <Link to={`${recipe.name}`} key={recipe.name}>{recipe.name}</Link>)}

    </div>
  )
}

export default List
