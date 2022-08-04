const getListRecipe = (param, query) => {
  const urlAPI = `https://www.themealdb.com/api/json/v1/1/list.php?${param}=${query}`
  return fetch(urlAPI)
    .then(res => res.json())
    .then(data => data.meals.map(recipe => ({
      name: Object.values(recipe.valueOf())[0]
    })))
}

export default getListRecipe
