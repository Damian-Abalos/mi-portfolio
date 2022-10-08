import './App.css';
import Habilidades from './components/habilidades/Habilidades';
import Header from './components/header/Header.jsx'
import Experiencia from './components/experiencia/Experiencia.jsx'
import Proyectos from './components/proyectos/Proyectos.jsx'
import Hobbies from './components/hobbies/Hobbies';

function App() {
  return (
    <div className="App container">
      <div className='row'>
        <div className="col-xl-12 p-1" >
          <Header />
        </div>
        <div className="col-xl-8 p-1" >
          <Proyectos />
        </div>
        <div className="col-xl-4 row my-0 mx-auto p-0 align-content-between">
          <div className="col-xl-12 col-lg-5 p-1">
            <Habilidades />
          </div>
          <div className="col-xl-12 col-lg-7 p-1 my-0 mx-auto d-flex">
            <Experiencia />
          </div>
        </div>
        <div className="col-xl-12 p-1 mb-4" >
          <Hobbies />
        </div>
      </div>
    </div>
  );
}

export default App;

//col-xl- col-lg- col-md- col-sm-
