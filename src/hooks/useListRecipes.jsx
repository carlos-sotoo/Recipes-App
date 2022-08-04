import { useEffect, useState } from 'react'
import getListRecipe from '../services/getListRecipe'

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

const useListRecipes = (param, query) => {
  const [loading, setLoading] = useState(true)
  const [recipes, setRecipes] = useState([])

  const par = filter(param)

  useEffect(() => {
    getListRecipe(par, query).then(res => {
      setRecipes(res)
      setLoading(false)
    })
  }, [par, query])

  return [loading, recipes]
}

export default useListRecipes
