import { useContext, useState } from "react";
import { ClimasContext } from "../../contexts/ClimasContext";
import { FiltrosContext } from "../../contexts/FiltrosContext";
import { FaSearch } from "react-icons/fa";

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
        <FaSearch/>
        {
          <div className="buscador-container">
            <input
              value={busqueda}
              placeholder="ingrese el nombre de la ciudad"
              onChange={handleChange}
            />
          </div>
        }
      </div>
    </>
  );
};
export default Buscador;
