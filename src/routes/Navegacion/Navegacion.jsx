import { useContext, useEffect, useState } from "react";
import { Link, Outlet } from "react-router-dom";
import { UserContext } from "../../contexts/UserContext";
import { ClimasContext } from "../../contexts/ClimasContext";
//import { SecionContext } from "../../context/SecionContext";
import logo from "../../assets/logo.jpg";
import "./Navegacion.css";
import { listaPredefinida } from "../../listaPredefinida";
import swal from "sweetalert";

const Navegacion = () => {
  const { currentUser, setCurrentUser } = useContext(UserContext);
  const { listaClimas, setListaClimas } = useContext(ClimasContext);
  const [listaSeciones, setListaSeciones] = useState([]);
  const [contador, setContador] = useState(1);
  useEffect(() => {
    const userStored = JSON.parse(localStorage.getItem("currentUser"));
    console.log({ userStored });
    console.log(currentUser);
    if (currentUser !== null) {
      if (listaSeciones.length !== 0) {
        console.log(listaSeciones);
        if (listaSeciones.name == currentUser.username) {
          console.log(listaSeciones.ubicaciones);
          setListaClimas(listaSeciones.ubicaciones);
        }
      } else {
        // setListaClimas(listaPredefinida)
      }
    }
  }, [currentUser]);

  const handleSignOut = () => {
    const informacionDeUsuario = {
      id: contador,
      name: currentUser.username,
      ubicaciones: listaClimas,
    };
    console.log(informacionDeUsuario);
    setContador(contador + 1);
    setListaSeciones(informacionDeUsuario);
    setCurrentUser(null);
    setListaClimas(listaPredefinida);
    console.log(listaSeciones);
  };
  const Alerta = () => {
    swal(
      "Acceso denegado",
      "Inicie secion para poder agregar ubicaciones!!!",
      "warning"
    );
  };
  return (
    <>
      <div className="navigation">
        <Link className="logo-container" to="/">
          <img src={logo} alt="Logo" className="logo" />
        </Link>
        <div className="nav-links-container">
          {currentUser ? (
            <Link className="nav-link" to="/clima/create">
              Nueva Ciudad{" "}
            </Link>
          ) : (
            <span className="nav-link" onClick={() => Alerta()}>
              Agregar Ciudad
            </span>
          )}
          {currentUser ? (
            <span className="nav-link" onClick={handleSignOut}>
              <Link className="nav-link sign-in" to="/">
                Cerrar Secion
              </Link>
            </span>
          ) : (
            <Link className="nav-link sign-in" to="/login">
              Iniciar Sesión
            </Link>
          )}
        </div>
      </div>
      <Outlet />
    </>
  );
};
export default Navegacion;
