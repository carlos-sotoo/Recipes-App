import { useEffect, useState } from 'react'
import getRecipes from '../services/getRecipes'

const useSearchRecipes = (search) => {
  const [loading, setLoading] = useState(true)
  const [recipes, setRecipes] = useState([])

  useEffect(() => {
    getRecipes(search)
      .then(data => {
        setRecipes(data)
        setLoading(false)
      })
  }, [search])

  return [loading, recipes]
}

export default useSearchRecipes
