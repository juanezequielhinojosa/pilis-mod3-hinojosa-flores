import { useContext, useState } from "react";
import { FiltrosContext } from "../../contexts/FiltrosContext";
import { FaSearch } from "react-icons/fa";
import "./Buscador.css";

//ESTE COMPONENTE PERMITE REALIZAR LA BUSQUEDA POR CIUDADES
const Buscador = () => {
  const [busqueda, setBusqueda] = useState("");
  const { setFilters } = useContext(FiltrosContext);
  
  //EL COMPONENTE BUSQUEDA ALTERA EL ESTADO GLOBAL DEL FILTRO
  const handleChange = (e) => {
    setBusqueda(e.target.value);
   // console.log(e.target.value);
    setFilters({ searchField: e.target.value });
  };
  return (
    <div className="main-container">
      <div className="buscador-container">
        <input
          className="buscador"
          value={busqueda}
          placeholder="  Ingrese el nombre de la ciudad"
          onChange={handleChange}
        />
        <FaSearch className="icon" />
      </div>

      
    </div>
  );
};
export default Buscador;
