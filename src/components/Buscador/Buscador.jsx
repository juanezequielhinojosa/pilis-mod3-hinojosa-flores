import { useContext, useState } from "react";
import { ClimasContext } from "../context/ClimasContext";
import { FiltersContext } from "../context/FiltersContext";

const Busqueda = () => {
  const [busqueda, setBusqueda] = useState("");
  const { setFilters } = useContext(FiltersContext);
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
        <button onClick={() => setListaAuxiliar(listaClima)}>ok</button>
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
export default Busqueda;
