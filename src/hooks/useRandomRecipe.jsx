import { useEffect, useState } from 'react'
import getRandomRecipe from '../services/getRandomRecipe'

const useRandomRecipe = () => {
  const [loading, setLoading] = useState(true)
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    getRandomRecipe().then(recipe => {
      setRecipe(recipe)
      setLoading(false)
    })
  }, [])

  return [loading, recipe]
}

export default useRandomRecipe
