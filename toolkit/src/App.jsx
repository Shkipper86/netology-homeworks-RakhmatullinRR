import {Routes, Route} from 'react-router-dom'
import './App.css'
import { Search } from './Components/Search'
import { Movie } from './Components/Movie'
import { FavoriteMovies } from './Components/FavoriteMovies'

function App() {

  return (
    <div className='main-container'>
      <Routes>
        <Route path="/" element={<Search />}/>
        <Route path='/:id' element={<Movie />} />
        <Route path='/favorite' element={<FavoriteMovies />} />
      </Routes>
    </div>
  )
}

export default App
