import './App.css'
import {Routes, Route} from 'react-router-dom'
import { ServiceList } from './components/ServiceList'
import { ServiceDetails } from './components/ServiceDetails'

function App() {

  return (
    <Routes>
      <Route path='/' element={<ServiceList />}/>
      <Route path='/:id' element={<ServiceDetails />}/>
    </Routes>
  )
}

export default App
