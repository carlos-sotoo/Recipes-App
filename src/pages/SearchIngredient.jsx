import { useParams } from 'react-router-dom'

const SearchIngredient = () => {
  const { name } = useParams()
  return (
    <div className='search-ingredient'>
      {name}
    </div>
  )
}

export default SearchIngredient
