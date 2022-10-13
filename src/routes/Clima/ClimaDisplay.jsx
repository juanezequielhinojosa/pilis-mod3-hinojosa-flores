import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { UbicacionesContext } from "../../contexts/UbicacionesContext";
import "./ClimaDisplay.css";

//ESTE COMPONENTE PERMITE VISUALIZAR DE FORMA MAS DETALLADA EL CLIMA DE UNA UBICACION
const ClimaDisplay = () => {
  const { id } = useParams();
  const { listaUbicaciones } = useContext(UbicacionesContext);
  const [u] = listaUbicaciones.filter((ubicacion) => ubicacion.id === Number(id));

  return (
    <div className="palette-display-container">
      <div className="palette-display-card">
      <img src={u.imagen} alt="" />
        <h1 className="palette-display-name">{u.name}</h1>
        <h1 className="palette-display-name">{u.latitud}</h1>
        <div className="tag-d-container"></div>
      </div>
      <Link className="btn-back" to="/">
        Volver a la Pagina Principal
      </Link>
    </div>
  );
};

export default ClimaDisplay;
