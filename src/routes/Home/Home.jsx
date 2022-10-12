import "./Home.css";
import { useContext } from "react";
import { ClimasContext } from "../../contexts/ClimasContext";
import { FiltrosContext } from "../../contexts/FiltrosContext";
import Climas from "../../components/Clima/Climas";
//import Busqueda from "../../components/Busqueda";
import Buscador from "../../components/Buscador/Buscador";

const Home = () => {
  const { listaClimas } = useContext(ClimasContext);
  const { filters } = useContext(FiltrosContext);

  const listaClimasFiltrados = listaClimas.filter((tarjetaNew) => {
    //console.log(filters.searchField)
    if (filters.searchField === "") {
      return true;
    } else {
      if (
        tarjetaNew.name
          .toString()
          .toLowerCase()
          .includes(filters.searchField.toLowerCase())
      ) {
        //console.log(tarjetaNew)
        return tarjetaNew;
      }
    }
  });
  return (
    <>
      <Buscador />
      <Climas climas={listaClimasFiltrados} />
    </>
  );
};
export default Home;
