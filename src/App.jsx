import './App.css'
import Saludo from './components/Saludo';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {

  return (
    <div className='main bg-dark d-flex justify-content-center align-items-center'>
      <Saludo saludo="my friend!"></Saludo>
    </div>

  )
}

export default App;
