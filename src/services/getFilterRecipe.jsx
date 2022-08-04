const getFilterRecipe = (param, query) => {
  const urlAPI = `https://www.themealdb.com/api/json/v1/1/filter.php?${param}=${query}`
  return fetch(urlAPI)
    .then(res => res.json())
    .then(data => data.meals.map(recipe => ({
      id: recipe.idMeal,
      name: recipe.strMeal,
      img: recipe.strMealThumb
    })))
}

export default getFilterRecipe
