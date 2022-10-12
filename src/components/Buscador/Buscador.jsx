import { useContext, useState } from "react";
import { ClimasContext } from "../../contexts/ClimasContext";
import { FiltrosContext } from "../../contexts/FiltrosContext";
import { FaSearch } from "react-icons/fa";
import "./Buscador.css";

const Buscador = () => {
  const [busqueda, setBusqueda] = useState("");
  const { setFilters } = useContext(FiltrosContext);
  const { listaClima, setListaClimas } = useContext(ClimasContext);
  const [listaAuxiliar, setListaAuxiliar] = useState([]);

  const handleChange = (e) => {
    setBusqueda(e.target.value);
    console.log(e.target.value);
    setFilters({ searchField: e.target.value });
  };
  return (
    <>
      <div className="main-container">
        {/* <button onClick={() => setListaAuxiliar(listaClima)}>ok</button> */}
        <div className="icon">
        <FaSearch/>
        </div>
        {
          <div className="buscador-container">
            <input
            className="buscador"
              value={busqueda}
              placeholder="  Ingrese el nombre de la ciudad"
              onChange={handleChange}
            />
          </div>
        }
      </div>
    </>
  );
};
export default Buscador;
