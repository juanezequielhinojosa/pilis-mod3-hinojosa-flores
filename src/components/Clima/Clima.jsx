import { FaHeart, FaRegHeart } from "react-icons/fa";
import { FaTrashAlt } from "react-icons/fa";
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
    
    <div className='clima-container'>
      <div className='clima'>
      <h3>{id}</h3>
      <h1>{name}</h1>     
      <h2>Temp: {temperature} °C</h2>
      <h2>Vel. viento: {windspeed} Km/h</h2>
      <h3>Lat: {items.latitude}</h3>
      <h3>Long: {items.longitude}</h3>
      </div>

      <div className='fav'>
      <FaTrashAlt onClick={() => eliminarTarjeta(id)}/>
      {/* <button onClick={() => eliminarTarjeta(id)}>Eliminar</button> */}
      <Link className="btn-see-more" to={`/clima/${id}`}>
        Ver más
      </Link>
      </div>
    </div>
  );
};
export default Clima;
