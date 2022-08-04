import { useEffect, useState } from 'react'
import getRecipe from '../services/getRecipe'

const useRecipe = (id) => {
  const [loading, setLoading] = useState(true)
  const [recipe, setRecipe] = useState({})

  useEffect(() => {
    getRecipe(id).then(data => {
      setRecipe(data)
      setLoading(false)
    })
  }, [id])

  return [loading, recipe]
}

export default useRecipe
