
const getRecipe = (id) => {
  const urlAPI = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${id}`

  return fetch(urlAPI)
    .then(res => res.json())
    .then(data => {
      const { meals } = data

      const ingredients = () => {
        const arrayIng = []
        for (let i = 1; i <= 20; i++) {
          if (meals[0][`strIngredient${i}`]) {
            if (!arrayIng.find(ingre => ingre.ingredient === meals[0][`strIngredient${i}`])) {
              arrayIng.push({
                ingredient: meals[0][`strIngredient${i}`],
                quantity: meals[0][`strMeasure${i}`]
              })
            }
          }
        }

        return arrayIng
      }

      return {
        id: meals[0].idMeal,
        name: meals[0].strMeal,
        category: meals[0].strCategory,
        country: meals[0].strArea,
        img: meals[0].strMealThumb,
        ingredients: ingredients(),
        instructions: meals[0].strInstructions,
        video: meals[0].strYoutube.length > 1 ? `https://www.youtube.com/embed/${meals[0].strYoutube.split('=').at(-1)}` : false
      }
    })
}

export default getRecipe
