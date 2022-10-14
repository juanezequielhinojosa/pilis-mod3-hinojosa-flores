import "./Home.css";
import { useContext } from "react";
import { UbicacionesContext } from "../../contexts/UbicacionesContext";
import { FiltrosContext } from "../../contexts/FiltrosContext";
import Ubicaciones from "../../components/Clima/Ubicaciones";
import Buscador from "../../components/Buscador/Buscador";

const Home = () => {
  const { listaUbicaciones } = useContext(UbicacionesContext);
  const { filters } = useContext(FiltrosContext);

  //SE FILTRAN LAS UBICACIONES QUE COINCIDEN CON EL CAMPO DE BUSQUEDA DEL COMPONENTE BUSCADOR
  const listaUbicacionesFiltradas = listaUbicaciones.filter((Ubicacion) => {
    //console.log(filters.searchField)
    if (filters.searchField === "") {
      return true;
    } else {
      if (
        Ubicacion.name
          .toString()
          .toLowerCase()
          .includes(filters.searchField.toLowerCase())
      ) {
        //console.log(Ubicacion)
        return Ubicacion;
      }
    }
  });
  return (
    <>
      <Buscador />
      <Ubicaciones ubicaciones={listaUbicacionesFiltradas} />
    </>
  );
};
export default Home;
