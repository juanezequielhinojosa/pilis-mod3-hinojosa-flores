import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navegacion from './routes/Navegacion/Navegacion';
import Home from './routes/Home/Home';
import Login from './routes/Login/Login.jsx'
import ClimaCreacion from './routes/Clima/ClimaCreacion';
import ClimaDisplay from './routes/Clima/ClimaDisplay';
import { ClimasContext } from './contexts/ClimasContext';
import { useEffect,useContext } from 'react';
import { listaPredefinida } from './listaPredefinida';


function App() {
  const  { setListaClimas }=useContext(ClimasContext);
  useEffect(()=>{
    setListaClimas(listaPredefinida)
  },[])
  return (
    <div className="App">
     <Routes>
        <Route path='/' element={<Navegacion/>}>
        <Route index element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='clima/:id' element={<ClimaDisplay/>}/> 
        <Route path='clima/create' element={<ClimaCreacion/>}/>
        </Route>
     </Routes>
    </div>
  );
}
export default App;