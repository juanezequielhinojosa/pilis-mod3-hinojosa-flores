import { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { ClimasContext } from "../../context/ClimasContext";
import "./ClimaDisplay.css";

const ClimaDisplay = () => {
  const { id } = useParams();
  const { listaClima } = useContext(ClimasContext);
  const [c] = listaClima.filter((clima) => clima.id === Number(id));

  return (
    <div className="palette-display-container">
      <div className="palette-display-card">
        <h1 className="palette-display-name">{c.name}</h1>
        <h1 className="palette-display-name">{c.latitud}</h1>
        <div className="tag-d-container"></div>
      </div>
      <Link className="btn-back" to="/">
        Volver al Inicio
      </Link>
    </div>
  );
};

export default ClimaDisplay;
