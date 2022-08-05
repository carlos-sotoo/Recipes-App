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
      {typeof (recipes) !== 'string' ? recipes.map(recipe => <CardRecipe recipe={recipe} key={recipe.id} />) : <h1>Ingredient {name} <br /> Not found</h1>}
    </div>
  )
}

export default Filter
