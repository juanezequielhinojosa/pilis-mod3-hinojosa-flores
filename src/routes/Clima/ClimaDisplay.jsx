import { useContext, useEffect, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { UbicacionesContext } from "../../contexts/UbicacionesContext";
import { getClima } from "../../service";
import "./ClimaDisplay.css";

//ESTE COMPONENTE PERMITE VISUALIZAR DE FORMA MAS DETALLADA EL CLIMA DE UNA UBICACION
const ClimaDisplay = () => {
  const [datos, setDatos] = useState({});
  const [items, setItems] = useState({});

  const { id } = useParams();
  const { listaUbicaciones } = useContext(UbicacionesContext);
  const [u] = listaUbicaciones.filter(
    (ubicacion) => ubicacion.id === Number(id)
  );
  //AQUI SE HACE LA LLAMADA A LA API
  useEffect(() => {
    getClima(u.latitud, u.longitud)
      .then((data) => {
        setItems(data);
        setDatos(data.current_weather);
      })
      .catch((err) => console.log(err));
  }, [u]);
  console.log(datos);
  return (
    <div className="contenedor-principal">
      <img src={u.imagen} alt="" />

      <div className="contendor-texto">
        <div className="contendor-datos">
          <h1 className="nombre-ciudad">
            <strong>{u.name}</strong>
          </h1>
          <p>
            Temp: <span>{datos.temperature} °C</span>{" "}
          </p>
          <p>
            Vel. viento: <span>{datos.windspeed} Km/h</span>{" "}
          </p>
          <p>
            Long: <span>{items.latitude}</span>
          </p>
          <p>
            {" "}
            Lat: <span> {items.longitude}</span>{" "}
          </p>
        </div>
        <Link className="btn-back" to="/">
          Volver
        </Link>
      </div>
    </div>
  );
};

export default ClimaDisplay;
