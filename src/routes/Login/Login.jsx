import { useContext } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import "./Login.css";

//ESTE COMPONENTE PERMITE AL USUARIO REGISTRARSE EN LA APLICACION PARA PODER AGREGAR UBICACIONES
const Login = () => {
  const { setCurrentUser } = useContext(UserContext);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const navigate = useNavigate();

  const onSubmit = (data) => {
    setCurrentUser(data);
    navigate("/");
  };

  return (
    <div className="sign-in-container">
      <div className="form-container">
         <h2>Ingresa tus Datos</h2>
      <form className="sign-in-form" onSubmit={handleSubmit(onSubmit)}>
        <input
          className="input-form"
          type="text"
          placeholder="Nombre de usuario"
          {...register("username", {
            required: "Debe ingresar su nombre de usuario",
          })}
        />
        <p>{errors.username?.message}</p>
        <input
          className="input-form"
          type="password"
          placeholder="Contraseña"
          {...register("password", {
            required: "Debe ingresar su contraseña",
          })}
        />
        <p>{errors.password?.message}</p>
        <button className="btn-form" type="submit">
          Iniciar Sesión
        </button>
      </form>
      </div>
     
    </div>
  );
};

export default Login;
