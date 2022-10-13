import { FaTrashAlt } from "react-icons/fa";
import { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getClima } from "../../service";
import { UbicacionesContext } from "../../contexts/UbicacionesContext";
import swal from "sweetalert";
import "./Clima.css";

const Clima = ({ ubicacion }) => {
  const [items, setItems] = useState({});
  const [datos, setDatos] = useState({});
  const { listaUbicaciones, setListaUbicaciones } = useContext(UbicacionesContext);
  const { id, name, latitud, longitud } = ubicacion;
  const { temperature, windspeed } = datos;

  //AQUI SE HACE LA LLAMADA A LA API
  useEffect(() => {
    getClima(latitud, longitud)
      .then((data) => {
        setItems(data);
        setDatos(data.current_weather);
      })
      .catch((err) => console.log(err));
  }, []);
  console.log(datos);

  //ESTA FUNCION PERMITE ELIMINAR UNA UBICACION DE LA LISTA
  const eliminarUbicacion = (id) => {
    swal({
      title: "Eliminar",
      text: "Estas seguro de eliminar esta ubicacion?",
      icon: "warning",
      buttons: ["No", "Si"],
    }).then((respuesta) => {
      if (respuesta) {
        const listaActualizada = listaUbicaciones.filter((ubicacion) => ubicacion.id !== id);
        setListaUbicaciones(listaActualizada);
        // setListaUbicaciones(listaUbicaciones.filter((ubicacion) => ubicacion.id !== id));
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
      <h3>Vel. viento: {windspeed} Km/h</h3>
      <h3>Lat: {items.latitude}</h3>
      <h3>Long: {items.longitude}</h3>
      </div>

      <div className='fav'>
      <FaTrashAlt onClick={() => eliminarUbicacion(id)}/>
      {/* <button onClick={() => eliminarTarjeta(id)}>Eliminar</button> */}
      <Link className="btn-see-more" to={`/ubicacion/${id}`}>
        Ver más
      </Link>
      </div>
    </div>
  );
};
export default Clima;
