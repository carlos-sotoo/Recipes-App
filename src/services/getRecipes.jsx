const getRecipes = (search) => {
  const urlAPI = `https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`

  return fetch(urlAPI)
    .then(res => res.json())
    .then(data => {
      if (data.meals) {
        return data.meals.map(recipe => ({
          id: recipe.idMeal,
          name: recipe.strMeal,
          img: recipe.strMealThumb
        }))
      }
      return false
    })
}

export default getRecipes
