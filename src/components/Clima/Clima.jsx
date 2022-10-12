import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getClima } from "../../service";
import { ClimasContext } from "../../contexts/ClimasContext";
import swal from "sweetalert";
import "./Clima.css";

const Clima = ({ clima }) => {
  const [items, setItems] = useState({});
  const [datos, setDatos] = useState({});
  const { listaClimas, setListaClimas } = useContext(ClimasContext);
  const { id, name, latitud, longitud } = clima;
  const { temperature, windspeed } = datos;
  useEffect(() => {
    getClima(latitud, longitud)
      .then((data) => {
        setItems(data);
        setDatos(data.current_weather);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(datos);
  const eliminarTarjeta = (id) => {
    swal({
      title: "Eliminar",
      text: "Estas seguro de eliminar esta ubicacion?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((respuesta) => {
      if (respuesta) {
        const listaActualizada = listaClimas.filter((clima) => clima.id !== id);
        setListaClimas(listaActualizada);
        // setListaClimas(listaClimas.filter((clima) => clima.id !== id));
        swal({ text: "Ubicacion eliminada con exito", icon: "success" });
      }
    });
  };

  return (
    <div>
      <h1>{id}</h1>
      <h1>{name}</h1>
      <h1>{items.latitude}</h1>
      <h1>{items.longitude}</h1>
      <h1>{temperature} °C</h1>
      <h1>{windspeed} Km/h</h1>
      <button onClick={() => eliminarTarjeta(id)}>Eliminar</button>
      <Link className="btn-see-more" to={`/clima/${id}`}>
        Ver más
      </Link>
    </div>
  );
};
export default Clima;
