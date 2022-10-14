import './App.css';
import { Routes,Route } from 'react-router-dom';
import Navegacion from './routes/Navegacion/Navegacion';
import Home from './routes/Home/Home';
import Login from './routes/Login/Login.jsx'
import UbicacionCreacion from './routes/Clima/UbicacionCreacion';
import ClimaDisplay from './routes/Clima/ClimaDisplay';
import { UbicacionesContext } from './contexts/UbicacionesContext';
import { useEffect,useContext } from 'react';
import { listaPredefinida } from './listaPredefinida';


function App() {
  // LA LISTA PREDEFINIDA SE CARGA AL MOMENTO DE INICIAR NUESTRA APLICACION
  const  { setListaUbicaciones }=useContext(UbicacionesContext);
  useEffect(()=>{
    setListaUbicaciones(listaPredefinida)
  },[])
  return (
    <div className="App">
      {/* AQUI DEFINIMOS LAS RUTAS DE NUESTRA APLICACION */}
     <Routes>
        <Route path='/' element={<Navegacion/>}>
        <Route index element={<Home/>}/>
        <Route path='login' element={<Login/>}/>
        <Route path='ubicacion/:id' element={<ClimaDisplay/>}/> 
        <Route path='ubicacion/create' element={<UbicacionCreacion/>}/>
        </Route>
     </Routes>
    </div>
  );
}
export default App;