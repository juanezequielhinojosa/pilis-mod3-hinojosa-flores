import "./Home.css";
import { useContext } from "react";
import { ClimasContext } from "../../context/ClimasContext";
import { FiltersContext } from "../../context/FiltersContext";
import Climas from "../../components/Clima/Climas";
import Busqueda from "../../components/Busqueda";

const Home = () => {
  const { listaClima } = useContext(ClimasContext);
  const { filters } = useContext(FiltersContext);

  const listaClimasFiltrados = listaClima.filter((tarjetaNew) => {
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
      <Busqueda />
      <Climas climas={listaClimasFiltrados} />
    </>
  );
};
export default Home;
