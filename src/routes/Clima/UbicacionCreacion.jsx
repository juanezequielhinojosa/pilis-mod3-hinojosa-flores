import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UbicacionesContext } from "../../contexts/UbicacionesContext";
import { IdContext } from "../../contexts/IdContext";
import "./UbicacionCreacion.css";
import swal from "sweetalert";

//ESTE COMPONENTE ES UN FORMULARIO QUE PERMITE CREAR UNA UBICACION
const UbicacionCreacion = () => {
  const { idTarjeta, setIdTarjeta } = useContext(IdContext);
  const { listaUbicaciones, setListaUbicaciones } = useContext(UbicacionesContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    console.log(data);
    setIdTarjeta(idTarjeta + 1);
    const nuevaUbicacion = {
      id: idTarjeta,
      name: data.cityName,
      latitud: data.latitud,
      longitud: data.longitud,
      imagen: data.imagen,
    };
    console.log("tarjetaNew");
    console.log(nuevaUbicacion);
    setListaUbicaciones([...listaUbicaciones, nuevaUbicacion]);
    swal({
      text: "Ubicacion creada con exito",
      icon: "success",
    });
    navigate("/");
  };

  return (
    <div className="main-container">
      <div className="form-container">
      <h1>Crea una nueva Ubicacion</h1>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-name-form"
          type="text"
          placeholder="Nombre de la ciudad"
          {...register("cityName", {
            required: "Debe ingresar el nombre de la ciudad",
          })}
        />
        <p>{errors.cityName?.message}</p>
        <input
          className="input-name-form"
          type="text"
          placeholder="latitud"
          {...register("latitud", {
            required: "Debe ingresar una latitud",
          })}
        />
        <p>{errors.latitud?.message}</p>
        <input
          className="input-name-form"
          type="text"
          placeholder="longitud"
          {...register("longitud", {
            required: "Debe ingresar una longitud",
          })}
        />
        <p>{errors.longitud?.message}</p>
        <input
          className="input-name-form"
          type="text"
          placeholder="ingresa una postal"
          {...register("imagen", {
            required: "Debe ingresar una postal",
          })}
        />
        <p>{errors.imagen?.message}</p>
        <button className="btn-form" type="submit">
          Crear Ubicacion
        </button>
      </form>
      </div>
      
    </div>
  );
};
export default UbicacionCreacion;
