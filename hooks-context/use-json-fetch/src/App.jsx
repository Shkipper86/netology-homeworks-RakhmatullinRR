import './App.css'
import { UserFetch } from './components/UserFetch'

function App() {

  return (
    <>
      <UserFetch url='http://localhost:7070/data'/>
      <UserFetch url='http://localhost:7070/error'/>
      <UserFetch url='http://localhost:7070/loading'/>
    </>
  )
}

export default App
