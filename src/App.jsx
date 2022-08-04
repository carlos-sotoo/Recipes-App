import { Route, Routes } from 'react-router-dom'
import Main from './components/Main'
import Filter from './pages/Filter'
import Details from './pages/Details'
import Home from './pages/Home'
import './styles/App.scss'
import List from './pages/List'
import Search from './pages/Search'

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Main />}>
        <Route index element={<Home />} />
        <Route path='recipes/:name' element={<Search />} />
        <Route path='recipe/:id' element={<Details />} />
        <Route path='country' element={<List />} />
        <Route path='country/:name' element={<Filter />} />
        <Route path='country/:name/recipe/:id' element={<Details />} />
        <Route path='category' element={<List />} />
        <Route path='category/:name' element={<Filter />} />
        <Route path='category/:name/recipe/:id' element={<Details />} />
        <Route path='*' element={<h1>Page not Found</h1>} />
      </Route>
    </Routes>
  )
}

export default App
