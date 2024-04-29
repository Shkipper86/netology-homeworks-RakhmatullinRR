import {Routes, Route} from 'react-router-dom'

import './App.css'
import { Posts } from './Components/Posts'
import { NewPost } from './Components/NewPost'
import { Post } from './Components/Post'

function App() {

  return (
    <>
     <Routes>
          <Route path="/" index element={<Posts />} />
          <Route path="/new" element={<NewPost />} />
          <Route path="/:id" element={<Post />} />
      </Routes>
    </>
  )
}

export default App
