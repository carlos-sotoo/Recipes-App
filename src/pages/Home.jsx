import CardRecipe from '../components/CardRecipe'
import RandomRecipe from '../components/RandomRecipe'
import { useLocalStorage } from '../hooks/useLocalStorage'

import '../styles/pages/home.scss'

const Home = () => {
  const { storedValue } = useLocalStorage('lastRecipes', [])

  return (
    <section className='home'>
      <RandomRecipe />
      {storedValue.length >= 1
        ? <div className='last'>
          <h2 className='title'>Last recipes seen</h2>
          <div className='last-visited'>
            {storedValue.map(recipe => {
              if (recipe === null) return ''
              return <CardRecipe key={recipe.id} recipe={recipe} />
            })}
          </div>
        </div>
        : null
      }
    </section>
  )
}

export default Home
