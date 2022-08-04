import { useEffect, useState } from 'react'
import getFilterRecipe from '../services/getFilterRecipe'

const filter = (param) => {
  switch (param) {
    case 'category':
      return 'c'

    case 'country':
      return 'a'

    case 'ingredients':
      return 'i'
    default:
      break
  }
}

const useFilterRecipes = (param, query) => {
  const [loading, setLoading] = useState(true)
  const [recipes, setRecipes] = useState([])

  const par = filter(param)

  useEffect(() => {
    getFilterRecipe(par, query).then(res => {
      setRecipes(res)
      setLoading(false)
    })
  }, [par, query])

  return [loading, recipes]
}

export default useFilterRecipes
