import './App.css'
import { Cards } from './components/Cards'
import imgCap from './assets/img/Image cap.png'

function App() {

  return (
    <div className="container">
      <Cards>
        <img src={imgCap} className="card-img-top" alt="Image Cap" />
        <div className="card-body">
          <h5 className="card-title">Card title</h5>
          <p className="card-text">
            Some quick example text to build on the card title and make up the
            bulk of the card's content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </Cards>
      <Cards>
        <div className="card-body">
          <h5 className="card-title">Special title treatment</h5>
          <p className="card-text">
            With supporting text below as a natural lead-in to additional
            content.
          </p>
          <a href="#" className="btn btn-primary">
            Go somewhere
          </a>
        </div>
      </Cards>
    </div>
  );
}

export default App
