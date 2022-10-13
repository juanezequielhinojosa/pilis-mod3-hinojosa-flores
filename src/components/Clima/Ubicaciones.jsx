import Clima from "./Clima";
import './Ubicaciones.css'

//ESTE COMPONENTE DECIBE UNA LISTA DE UBICACIONES Y EN CADA ITERACION LLAMA AL COMPONENTE CLIMA
const  Ubicaciones= ({ubicaciones}) => {
 return (
   <div className='grid'>    
     {
      ubicaciones.map(u=>
        <Clima
        key={u.id}
        ubicacion={u}
        />
        )
     }
   </div>
 );
}
export default Ubicaciones;
