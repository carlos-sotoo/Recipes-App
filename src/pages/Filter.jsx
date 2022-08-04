import { useLocation, useParams } from 'react-router-dom'
import CardRecipe from '../components/CardRecipe'
import Spinner from '../components/Spinner'
import useFilterRecipes from '../hooks/useFilterRecipes'

import '../styles/pages/filter.scss'

const Filter = () => {
  const { name } = useParams()
  const location = useLocation()
  const param = location.pathname.split('/')[1]

  const [loading, recipes] = useFilterRecipes(param, name)

  if (loading) return <Spinner />

  return (
    <div className='filter'>
      {recipes.map(recipe => <CardRecipe recipe={recipe} key={recipe.id} />)}
    </div>
  )
}

export default Filter
