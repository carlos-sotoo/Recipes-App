import { useParams } from 'react-router-dom'
import CardRecipe from '../components/CardRecipe'
import Spinner from '../components/Spinner'
import useSearchRecipes from '../hooks/useSearchRecipes'

import '../styles/pages/search.scss'

const Search = () => {
  const { name } = useParams()
  const [loading, recipes] = useSearchRecipes(name)

  if (loading) return <Spinner />
  return (
    <div className='search'>
      {recipes
        ? recipes.map(recipe => <CardRecipe recipe={recipe} key={recipe.id} />)
        : <h1>{'Recipe'} <span>{name}</span>  {'Not Found'}</h1>
      }
    </div>
  )
}

export default Search
